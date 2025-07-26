import React, { useState } from 'react';
import { Input, Form, Typography } from 'antd';
import { useOnboardingStatus } from '../onboardingState';
import { InputOTP } from 'antd-input-otp';

const { Title, Paragraph } = Typography;

const Step2OTP = ({ onValidate }) => {
  const { onboardingData, updateOnboardingData } = useOnboardingStatus();
  const [form] = Form.useForm();
  const [otpValues, setOtpValues] = useState(onboardingData.otp || '');

  const handleOtpChange = (value) => {
    setOtpValues(value);
    updateOnboardingData({ otp: value });
    onValidate(value.length === 6);
  };

  return (
    <div className="">
      <Title level={3} className="text-left text-3xl text-black font-medium mb-4">
        Verify OTP
      </Title>
      <Paragraph className="text-sm text-left text-[#12131A]">
        Please enter the 6-digit numeric OTP sent to your phone.
      </Paragraph>

      <Form
        form={form}
        layout="vertical"
        initialValues={{ otp: onboardingData.otp }}
        className="w-full"
      >
        <Form.Item
          name="otp"
          label="6-Digit OTP"
          rules={[
            {
              required: true,
              message: 'Please enter the 6-digit OTP.',
            },
            {
              pattern: /^\d{6}$/,
              message: 'OTP must be exactly 6 digits.',
            },
          ]}
        >
          <InputOTP
            length={6}
            value={otpValues}
            onChange={handleOtpChange}
            inputType="numeric"
            inputClassName="text-[18px] font-medium text-[#12131A] border border-[#D8DAE5] 
            hover:border-[#F57900] focus:border-[#F57900] hover:shadow-none focus-within:shadow-none 
            focus-within:border-[#F57900] rounded-md text-center grow !max-w-none"
            wrapperClassName="gap-2 flex"
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Step2OTP;
