// src/features/onboarding/components/Step1PhoneNumber.jsx
import React, { useEffect } from 'react';
import { Input, Form, Typography } from 'antd';
import { useOnboardingStatus } from '../onboardingState';
import { MobileOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Step1PhoneNumber = ({ onValidate }) => {
    const { onboardingData, updateOnboardingData } = useOnboardingStatus();
    const [form] = Form.useForm();

    const validatePhoneNumber = (phoneNumber) => {
        // Check if phone number matches the pattern and has proper length
        const phoneRegex = /^\+?\d{1,4}\d{7,12}$/;
        const isValid = phoneNumber && phoneRegex.test(phoneNumber.replace(/\s/g, ''));
        return isValid;
    };

    const handleValuesChange = (_, allValues) => {
        const phoneNumber = allValues.phoneNumber || '';
        updateOnboardingData({ phoneNumber });
        
        // Validate the phone number and update the validation state
        const isValid = validatePhoneNumber(phoneNumber);
        onValidate(isValid);
    };

    // Initial validation when component mounts
    useEffect(() => {
        const isValid = validatePhoneNumber(onboardingData.phoneNumber);
        onValidate(isValid);
    }, [onboardingData.phoneNumber, onValidate]);

    return (
        <div className="">
            <Title level={3} className="text-left text-3xl text-black font-medium mb-4">Hi, Welcome Back!</Title>
            <Paragraph className="text-sm text-left text-[#12131A]">
                Login to you account to enjoy
            </Paragraph>
            <Form
                form={form}
                layout="vertical"
                initialValues={{ phoneNumber: onboardingData.phoneNumber }}
                onValuesChange={handleValuesChange}
                className="w-full mt-10"
            >
                <Form.Item
                    name="phoneNumber"
                    label="Phone Number"
                    rules={[
                        { required: true, message: 'Please enter your phone number!' },
                        {
                            pattern: /^\+?\d{1,4}\d{7,12}$/,
                            message: 'Format: +91 9876543210',
                        },
                    ]}
                >
                    <Input
                        placeholder="e.g., +91 9876543210"
                        prefix={<MobileOutlined className='w-[16px] h-[22px] object-contain' />}
                        className="w-full stroke-[#D8DAE5] py-4 px-5 rounded-lg hover:border-[#F57900] focus:border-[#F57900] hover:shadow-none focus-within:shadow-none focus-within:border-[#F57900] "
                    />
                </Form.Item>
            </Form>
        </div>
    );
};
export default Step1PhoneNumber; 