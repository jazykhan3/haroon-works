
// src/features/onboarding/components/Step1PhoneNumber.tsx
import React, { useState } from 'react';
import { Input, Form, Typography, Space } from 'antd';
import { useOnboardingStatus } from '../onboardingState';

const { Title, Paragraph } = Typography;

interface Step1PhoneNumberProps {
    onValidate: (isValid: boolean) => void;
}

const Step1PhoneNumber: React.FC<Step1PhoneNumberProps> = ({ onValidate }) => {
    const { onboardingData, updateOnboardingData } = useOnboardingStatus();
    const [form] = Form.useForm();

    const handleValuesChange = (_: any, allValues: { phoneNumber: string }) => {
        updateOnboardingData({ phoneNumber: allValues.phoneNumber });
        form.validateFields(['phoneNumber'])
            .then(() => onValidate(true))
            .catch(() => onValidate(false));
    };

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Title level={3} className="text-center text-indigo-700">Enter Your Phone Number</Title>
            <Paragraph className="text-center text-gray-600 mb-6">
                We'll send a verification code to this number.
            </Paragraph>
            <Form
                form={form}
                layout="vertical"
                initialValues={{ phoneNumber: onboardingData.phoneNumber }}
                onValuesChange={handleValuesChange}
                className="w-full max-w-sm"
            >
                <Form.Item
                    name="phoneNumber"
                    label="Phone Number"
                    rules={[
                        { required: true, message: 'Please enter your phone number!' },
                        { pattern: /^\d{10,15}$/, message: 'Please enter a valid phone number (10-15 digits).' }, // Adjust regex for your region if needed
                    ]}
                >
                    <Input placeholder="e.g., 03XXXXXXXXX" className="w-full" />
                </Form.Item>
            </Form>
        </div>
    );
};

export default Step1PhoneNumber;