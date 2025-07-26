import React from 'react';
import { Select, Form, Typography } from 'antd';
import { useOnboardingStatus } from '../onboardingState';
import style from './style.module.scss'
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

    form.validateFields(['monthName'])
      .then(() => onValidate(true))
      .catch(() => onValidate(false));
  }, [form, onValidate]);

  return (
    <div className="">
      <Title level={3} className="text-left text-3xl text-black font-medium mb-4">Next Attempt Month</Title>
      <Paragraph className="text-sm text-left text-[#12131A] mb-6">
        Tell us more about your role, so we can personalize your experience.
      </Paragraph>
      <Form
        form={form}
        layout="vertical"
        initialValues={{ monthName: onboardingData.monthName }}
        onValuesChange={handleValuesChange}
        className="w-full"
      >
        <Form.Item
          name="monthName"
          label=""
          rules={[{ required: false, message: 'Please select a month!' }]}
        >
          <Select
            placeholder="Select a month"
            className={style.customSelect}
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) =>
              option?.children?.toLowerCase().includes(input.toLowerCase())
            }
          >
            {months.map(month => (
              <Select.Option key={month} value={month}>
                {month}
              </Select.Option>
            ))}
          </Select>

        </Form.Item>
      </Form>
    </div>
  );
};

export default Step5MonthDropdown; 