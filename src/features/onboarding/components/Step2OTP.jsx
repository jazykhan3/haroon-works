// src/features/onboarding/components/Step2OTP.jsx
import React from 'react';
import { Input, Form, Typography } from 'antd';
import { useOnboardingStatus } from '../onboardingState';

const { Title, Paragraph } = Typography;

const Step2OTP = ({ onValidate }) => {
  const { onboardingData, updateOnboardingData } = useOnboardingStatus();
  const [form] = Form.useForm();

  const handleValuesChange = (_, allValues) => {
    updateOnboardingData({ otp: allValues.otp });
    form.validateFields(['otp'])
      .then(() => onValidate(true))
      .catch(() => onValidate(false));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Title level={3} className="text-center text-indigo-700">Enter OTP</Title>
      <Paragraph className="text-center text-gray-600 mb-6">
        Please enter the 6-digit numeric OTP sent to your phone.
      </Paragraph>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ otp: onboardingData.otp }}
        onValuesChange={handleValuesChange}
        className="w-full max-w-sm"
      >
        <Form.Item
          name="otp"
          label="6-Digit OTP"
          rules={[
            { required: true, message: 'Please enter the OTP!' },
            { pattern: /^\d{6}$/, message: 'OTP must be 6 numeric digits.' },
          ]}
        >
          <Input placeholder="e.g., 123456" maxLength={6} className="w-full" />
        </Form.Item>
        <div className="text-center mt-4">
          <a href="#" className="text-indigo-600 hover:underline">Resend OTP</a>
        </div>
      </Form>
    </div>
  );
};

export default Step2OTP; 