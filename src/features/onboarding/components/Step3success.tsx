
// src/features/onboarding/components/Step3success.tsx
import React from 'react';
import { Radio, Form, Typography, Space } from 'antd';
import { useOnboardingStatus } from '../onboardingState';

const { Title, Paragraph } = Typography;

interface Step3successProps {
    onValidate: (isValid: boolean) => void;
}

const Step3success: React.FC<Step3successProps> = ({ onValidate }) => {
    const { onboardingData, updateOnboardingData } = useOnboardingStatus();
    const [form] = Form.useForm();

    const handleValuesChange = (_: any, allValues: { choiceRadio: string }) => {
        updateOnboardingData({ choiceRadio: allValues.choiceRadio });
        form.validateFields(['choiceRadio'])
            .then(() => onValidate(true))
            .catch(() => onValidate(false));
    };

    React.useEffect(() => {
        // Validate on mount if already selected
        form.validateFields(['choiceRadio'])
            .then(() => onValidate(true))
            .catch(() => onValidate(false));
    }, [form, onValidate]);

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <Title level={3} className="text-center text-indigo-700">Choose an Option</Title>
            <Paragraph className="text-center text-gray-600 mb-6">
                Please select one of the following choices.
            </Paragraph>
            <Form
                form={form}
                layout="vertical"
                initialValues={{ choiceRadio: onboardingData.choiceRadio }}
                onValuesChange={handleValuesChange}
                className="w-full max-w-sm"
            >
                <Form.Item
                    name="choiceRadio"
                    label="Your Choice"
                    rules={[{ required: true, message: 'Please select an option!' }]}
                >
                    <Radio.Group>
                        <Space direction="vertical" className="w-full">
                            <Radio value="optionA" className="border border-gray-200 p-3 rounded-md w-full hover:bg-gray-50 transition-colors duration-200">
                                <span className="font-medium text-lg">Option A</span>
                                <p className="text-sm text-gray-500">Description for option A.</p>
                            </Radio>
                            <Radio value="optionB" className="border border-gray-200 p-3 rounded-md w-full hover:bg-gray-50 transition-colors duration-200">
                                <span className="font-medium text-lg">Option B</span>
                                <p className="text-sm text-gray-500">Description for option B.</p>
                            </Radio>
                            <Radio value="optionC" className="border border-gray-200 p-3 rounded-md w-full hover:bg-gray-50 transition-colors duration-200">
                                <span className="font-medium text-lg">Option C</span>
                                <p className="text-sm text-gray-500">Description for option C.</p>
                            </Radio>
                        </Space>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Step3success;