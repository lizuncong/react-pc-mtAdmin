import React from 'react';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  // Upload,
  // message,
} from 'antd';
import styles from './index.module.less';
// import { getFileUrl } from '../../utils';
import { register } from '../../api/user';
import ImgUpload from '../../components/img-upload';

const { Option } = Select;

const genderOptions = [
  {
    label: '男',
    value: '1',
  },
  {
    label: '女',
    value: '2',
  },
  {
    label: '保密',
    value: '3',
  },
];

const smLabelSpan = 8;
const smWrapperSpan = 8;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 }, // 如果屏幕小于576，则标题一行，内容一行，上下排列
    sm: { span: smLabelSpan }, // 如果屏幕大于576，则标题在左边，内容在右边，左右排列
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: smWrapperSpan },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: smWrapperSpan,
      offset: smLabelSpan,
    },
  },
};

// const validateFile = (file) => {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('只能上传 JPG/PNG 类型的文件!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('图片必须小于 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// };

const RegistrationForm = () => {
  const [form] = Form.useForm();
  // const [fileList, setFileList] = useState([]);
  const onFinish = (values) => {
    const params = { ...values };
    console.log('fileLisst...', values);
    params.avatar = values.avatar.map((item) => item.originFileObj || item);
    console.log('params...', params);
    register(params);
  };
  const fileList = [];
  return (
    <div className={styles.container}>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          avatar: [],
          prefix: '86',
        }}
        scrollToFirstError
      >
        <Form.Item
          name="phone"
          label="手机号"
          rules={[{
            required: true,
            pattern: /^[0-9]{11}$/,
            message: '请输入11位格式正确的电话号码',
            len: 11,
          }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="userName"
          label="用户名"
          rules={[{ required: true, message: '请输入您的姓名', whitespace: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: '请输入至少6位密码',
              min: 6,
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="确认密码"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请确认密码',
              min: 6,
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('两次输入的密码不一致');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="gender"
          label="性别"
          rules={[
            { required: true, message: '请选择您的性别' },
          ]}
        >
          <Select>
            {
              genderOptions.map((op) => (
                <Option key={op.value} value={op.value}>{op.label}</Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item
          // name="avatar"
          label="上传头像"
          // rules={[
          //   {
          //     required: true,
          //     message: '上传头像',
          //   },
          // ]}
        >
          <div className={styles.fileRow}>
            <Form.Item
              name="avatar"
              noStyle
              valuePropName="fileObjs"
              rules={[
                {
                  required: true,
                  message: '上传头像',
                },
              ]}
            >
              <ImgUpload
                valuePropName="fileObjs"
                // onChange={(file) => {
                //   console.log('onchange..upload..', file);
                // }}
              />
              {/* <Upload */}
              {/*    // name="avatar" */}
              {/*  className={fileList.length > 1 && styles.uploadNone} */}
              {/*  listType="picture-card" */}
              {/*  showUploadList={false} */}
              {/*  // fileList={fileList} */}
              {/*  // onRemove={(file) => { */}
              {/*  //   const filelist = form.getFieldValue('avatar'); */}
              {/*  //   const index = filelist.indexOf(file); */}
              {/*  //   const newFileList = filelist.slice(); */}
              {/*  //   newFileList.splice(index, 1); */}
              {/*  //   form.setFieldsValue({ avatar: newFileList }); */}
              {/*  // }} */}
              {/*  beforeUpload={(file) => validateFile(file)} */}
              {/* > */}
              {/*  选择图片 */}
              {/* </Upload> */}
            </Form.Item>
            {
              fileList.map((file) => (
                <div key={file.uid} className={styles.imgContainer}>
                  <img className={styles.img} src={file.fileUrl} alt="" />
                  <div
                    className={styles.delete}
                    onClick={() => {
                      const index = fileList.indexOf(file);
                      const newFileList = fileList.slice();
                      newFileList.splice(index, 1);
                      form.setFieldsValue({ avatar: newFileList });
                    }}
                  >
                    x
                  </div>
                </div>
              ))
            }
          </div>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            { validator: (_, value) => (value ? Promise.resolve() : Promise.reject('需要接受协议')) },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            已阅读 <a href="">相关协议</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
