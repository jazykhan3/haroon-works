import React, { useEffect } from 'react';
import { Form, Typography } from 'antd';
import { FileTextOutlined, CheckCircleFilled } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Step4group = ({ onValidate }) => {
  const [form] = Form.useForm();

  // Custom card component for checkbox options
  const CustomCheckboxCard = ({ value, label }) => {
    const selected = Form.useWatch('choiceCheckbox', form)?.includes(value);

    const handleClick = () => {
      const current = form.getFieldValue('choiceCheckbox') || [];
      const updated = selected
        ? current.filter((v) => v !== value)
        : [...current, value];

      form.setFieldsValue({ choiceCheckbox: updated });
      onValidate(updated.length > 0); // ✅ Only check if any is selected
    };

    return (
      <div
        onClick={handleClick}
        className={`flex items-center justify-between px-8 py-7 rounded-lg border transition-all cursor-pointer mb-4 ${
          selected
            ? 'border-[#f57900] bg-white shadow-sm'
            : 'border-gray-200 bg-white hover:border-[#f57900]'
        }`}
      >
        <div className="flex items-center gap-3 justify-between w-full">
          <div className="flex items-center gap-3">
            <FileTextOutlined className="text-xl text-[#f57900]" />
            <span className="text-lg font-medium">{label}</span>
          </div>
          {selected && <CheckCircleFilled className="text-[#f57900] text-lg" />}
        </div>
      </div>
    );
  };

  // Validate on initial load
  useEffect(() => {
    const current = form.getFieldValue('choiceCheckbox') || [];
    onValidate(current.length > 0);
  }, []);

  return (
    <div className="">
      <Title level={3} className="text-left text-3xl text-black font-medium mb-4">Group?</Title>
      <Paragraph className="text-sm text-left text-[#12131A] mb-6">
        Choose the exam group that fits your goals and start setting your path to success.
      </Paragraph>

      <Form
        form={form}
        layout="vertical"
        initialValues={{ choiceCheckbox: [] }}
        className="w-full"
      >
        <Form.Item name="choiceCheckbox">
          <div className="flex flex-col">
            <CustomCheckboxCard value="checkbox1" label="Group 1" />
            <CustomCheckboxCard value="checkbox2" label="Group 2" />
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Step4group;
