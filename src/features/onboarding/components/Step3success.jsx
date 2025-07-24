import React from 'react';
import { Radio, Form, Typography, Space } from 'antd';
import { useOnboardingStatus } from '../onboardingState';
import {
    FileTextOutlined,
    ClusterOutlined,
    SmileOutlined,
    CheckCircleFilled,
} from '@ant-design/icons';
import style from './style.module.scss'

const { Title, Paragraph } = Typography;

const Step3success = ({ onValidate }) => {
    const { onboardingData, updateOnboardingData } = useOnboardingStatus();
    const [form] = Form.useForm();

    const handleValuesChange = (_, allValues) => {
        updateOnboardingData({ choiceRadio: allValues.choiceRadio });
        form.validateFields(['choiceRadio'])
            .then(() => onValidate(true))
            .catch(() => onValidate(false));
    };

    React.useEffect(() => {
        form.validateFields(['choiceRadio'])
            .then(() => onValidate(true))
            .catch(() => onValidate(false));
    }, [form, onValidate]);

    return (
        <div className="">
            <Title level={3} className="text-left text-3xl text-black font-medium mb-4">Personalize your CA Success</Title>
            <Paragraph className="text-sm text-left text-[#12131A]">
                Choose the exam type that fits your goals and start setting your path to success.
            </Paragraph>
            <Form
                form={form}
                layout="vertical"
                initialValues={{ choiceRadio: onboardingData.choiceRadio }}
                onValuesChange={handleValuesChange}
                className="w-full mt-8"
            >
                <Form.Item
                    name="choiceRadio"
                    rules={[{ required: true, message: 'Please select an option!' }]}
                >
                    <Radio.Group className={`w-full flex gap-4 flex-col ${style.customRadios}`}>
                        <Radio.Button
                            style={{ width: '100%' }}
                            value="foundation"
                            className={`!w-full !h-auto px-8 py-7 !flex !items-center !justify-between !rounded-xl border ${form.getFieldValue('choiceRadio') === 'foundation'
                                ? '!border-[#f57900] !text-[#f57900] shadow-[0_0_0_1px_#f57900]'
                                : 'border-gray-300'
                                }`}
                        >
                            <div className="flex items-center gap-3 justify-between w-full">
                                <div className='flex items-center gap-3'>
                                    <FileTextOutlined className="text-xl text-[#f57900]" />
                                    <span className="text-base font-medium text-black">Foundation</span>
                                </div>
                                {form.getFieldValue('choiceRadio') === 'foundation' && (
                                    <CheckCircleFilled className="text-[#f57900]" />
                                )}
                            </div>
                        </Radio.Button>

                        <Radio.Button
                            value="intermediate"
                            className={`!w-full !h-auto px-8 py-7 !flex flex-row !items-center !justify-between !rounded-xl border ${form.getFieldValue('choiceRadio') === 'intermediate'
                                ? '!border-[#f57900] !text-[#f57900] shadow-[0_0_0_1px_#f57900]'
                                : 'border-gray-300'
                                }`}
                        >
                            <div className="flex items-center gap-3 justify-between w-full">
                                <div className='flex items-center gap-3'>
                                    <ClusterOutlined className="text-xl text-[#f57900]" />
                                    <span className="text-base font-medium text-black">Intermediate</span>
                                </div>
                                {form.getFieldValue('choiceRadio') === 'intermediate' && (
                                    <CheckCircleFilled className="text-[#f57900]" />
                                )}
                            </div>
                        </Radio.Button>

                        <Radio.Button
                            value="final"
                            className={`!w-full !h-auto px-8 py-7 !flex !items-center !justify-between !rounded-xl border ${form.getFieldValue('choiceRadio') === 'final'
                                ? '!border-[#f57900] !text-[#f57900] shadow-[0_0_0_1px_#f57900]'
                                : 'border-gray-300'
                                }`}
                        >
                            <div className="flex items-center gap-3 justify-between w-full">
                                <div className='flex items-center gap-3'>
                                    <SmileOutlined className="text-xl text-[#f57900]" />
                                    <span className="text-base font-medium text-black">Final</span>
                                </div>
                                {form.getFieldValue('choiceRadio') === 'final' && (
                                    <CheckCircleFilled className="text-[#f57900]" />
                                )}
                            </div>
                        </Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Step3success;
