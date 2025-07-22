// src/features/onboarding/components/Step4group.jsx
import React from 'react';
import { Checkbox, Form, Typography, Space } from 'antd';
import { useOnboardingStatus } from '../onboardingState';

const { Title, Paragraph } = Typography;

const Step4group = ({ onValidate }) => {
  const { onboardingData, updateOnboardingData } = useOnboardingStatus();
  const [form] = Form.useForm();

  const initialValues = {
    choiceCheckbox: [
      onboardingData.choiceCheckbox1 ? 'checkbox1' : '',
      onboardingData.choiceCheckbox2 ? 'checkbox2' : '',
    ].filter(Boolean), // Filter out empty strings
  };

  const handleValuesChange = (_, allValues) => {
    const isChecked1 = allValues.choiceCheckbox.includes('checkbox1');
    const isChecked2 = allValues.choiceCheckbox.includes('checkbox2');
    updateOnboardingData({
      choiceCheckbox1: isChecked1,
      choiceCheckbox2: isChecked2,
    });
    // For checkboxes, often validation means at least one is selected, or no specific requirement
    // For this example, we'll say it's valid if at least one checkbox is selected.
    onValidate(allValues.choiceCheckbox.length > 0);
  };

  React.useEffect(() => {
    // Validate on mount
    onValidate(initialValues.choiceCheckbox.length > 0);
  }, [initialValues.choiceCheckbox.length, onValidate]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Title level={3} className="text-center text-indigo-700">Select Your Preferences</Title>
      <Paragraph className="text-center text-gray-600 mb-6">
        You can select one or both options below.
      </Paragraph>
      <Form
        form={form}
        layout="vertical"
        initialValues={initialValues}
        onValuesChange={handleValuesChange}
        className="w-full max-w-sm"
      >
        <Form.Item
          name="choiceCheckbox"
          label="Your Choices"
          rules={[{ required: true, message: 'Please select at least one option!', type: 'array', min: 1 }]}
        >
          <Checkbox.Group>
            <Space direction="vertical" className="w-full">
              <Checkbox value="checkbox1" className="border border-gray-200 p-3 rounded-md w-full hover:bg-gray-50 transition-colors duration-200">
                <span className="font-medium text-lg">Preference A</span>
                <p className="text-sm text-gray-500">Detailed description for preference A.</p>
              </Checkbox>
              <Checkbox value="checkbox2" className="border border-gray-200 p-3 rounded-md w-full hover:bg-gray-50 transition-colors duration-200">
                <span className="font-medium text-lg">Preference B</span>
                <p className="text-sm text-gray-500">Detailed description for preference B.</p>
              </Checkbox>
            </Space>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Step4group; 