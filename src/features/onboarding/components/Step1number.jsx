import React from 'react';
import { Input, Form, Typography } from 'antd';
import { useOnboardingStatus } from '../onboardingState';
import { MobileOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Step1PhoneNumber = ({ onValidate }) => {
    const { onboardingData, updateOnboardingData } = useOnboardingStatus();
    const [form] = Form.useForm();

    const handleValuesChange = (_, allValues) => {
        updateOnboardingData({ phoneNumber: allValues.phoneNumber });
        onValidate(true)
        // form.validateFields(['phoneNumber'])
        //     .then(() => onValidate(true))
        //     .catch(() => onValidate(false));
    };
    return (
      <div className="">
        <Title
          level={3}
          className="text-left text-3xl text-black font-medium mb-4"
        >
          Hi, Welcome Back!
        </Title>
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
              { required: false, message: "Please enter your phone number!" },
              {
                pattern: /^\+?[0-9]{1,4}[\s]?[0-9]{6,12}$/,
                message: "Format: +91 9876543210",
              },
            ]}
          >
            <Input
              placeholder="e.g., +91 9876543210"
              prefix={
                <MobileOutlined className="w-[16px] h-[22px] object-contain" />
              }
              className="w-full stroke-[#D8DAE5] py-4 px-5 rounded-lg hover:border-[#F57900] focus:border-[#F57900] hover:shadow-none focus-within:shadow-none focus-within:border-[#F57900] "
            />
          </Form.Item>
        </Form>
      </div>
    );
};
export default Step1PhoneNumber; 