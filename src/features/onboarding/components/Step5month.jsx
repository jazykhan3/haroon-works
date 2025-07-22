// src/features/onboarding/components/Step5MonthDropdown.jsx
import React from 'react';
import { Select, Form, Typography } from 'antd';
import { useOnboardingStatus } from '../onboardingState';

const { Title, Paragraph } = Typography;

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const Step5MonthDropdown = ({ onValidate }) => {
  const { onboardingData, updateOnboardingData } = useOnboardingStatus();
  const [form] = Form.useForm();

  const handleValuesChange = (_, allValues) => {
    updateOnboardingData({ monthName: allValues.monthName });
    form.validateFields(['monthName'])
      .then(() => onValidate(true))
      .catch(() => onValidate(false));
  };

  React.useEffect(() => {
    // Validate on mount if already selected
    form.validateFields(['monthName'])
      .then(() => onValidate(true))
      .catch(() => onValidate(false));
  }, [form, onValidate]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Title level={3} className="text-center text-indigo-700">Select Your Favorite Month</Title>
      <Paragraph className="text-center text-gray-600 mb-6">
        This is the final step! Please choose a month from the list.
      </Paragraph>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ monthName: onboardingData.monthName }}
        onValuesChange={handleValuesChange}
        className="w-full max-w-sm"
      >
        <Form.Item
          name="monthName"
          label="Month Name"
          rules={[{ required: true, message: 'Please select a month!' }]}
        >
          <Select
            placeholder="Select a month"
            className="w-full"
            showSearch // Allows searching through options
            optionFilterProp="children"
            filterOption={(input, option) =>
              option?.children?.toLowerCase().includes(input.toLowerCase())
            }
          >
            {months.map(month => (
              <Select.Option key={month} value={month}>{month}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Step5MonthDropdown; 