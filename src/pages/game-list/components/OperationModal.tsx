import {
  ModalForm,
  ProFormDateTimePicker,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import { Button, Result } from 'antd';
import type { FC } from 'react';
import type { GameListItemDataType } from '../data.d';
import styles from '../style.less';

type OperationModalProps = {
  done: boolean;
  visible: boolean;
  current: Partial<GameListItemDataType> | undefined;
  onDone: () => void;
  onSubmit: (values: GameListItemDataType) => void;
};

const OperationModal: FC<OperationModalProps> = (props) => {
  const { done, visible, current, onDone, onSubmit, children } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<GameListItemDataType>
      visible={visible}
      title={done ? null : `任务${current ? '编辑' : '添加'}`}
      className={styles.standardListForm}
      width={640}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      initialValues={current}
      submitter={{
        render: (_, dom) => (done ? null : dom),
      }}
      trigger={<>{children}</>}
      modalProps={{
        onCancel: () => onDone(),
        destroyOnClose: true,
        bodyStyle: done ? { padding: '72px 0' } : {},
      }}
    >
      {!done ? (
        <>
          <ProFormText
            name="name"
            label="Name"
            rules={[{ required: true, message: 'This field is required' }]}
            placeholder="Game name"
          />
          <ProFormTextArea
            name="description"
            label="Description"
            rules={[{ required: true, message: 'This field is required' }]}
            placeholder="Game description"
          />
          <ProFormDateTimePicker
            name="createdAt"
            label="开始时间"
            rules={[{ required: true, message: '请选择开始时间' }]}
            fieldProps={{
              style: {
                width: '100%',
              },
            }}
            placeholder="请选择"
          />
          <ProFormSelect
            name="owner"
            label="任务负责人"
            rules={[{ required: true, message: '请选择任务负责人' }]}
            options={[
              {
                label: '付晓晓',
                value: 'xiao',
              },
              {
                label: '周毛毛',
                value: 'mao',
              },
            ]}
            placeholder="请选择管理员"
          />
          <ProFormTextArea
            name="subDescription"
            label="产品描述"
            rules={[{ message: '请输入至少五个字符的产品描述！', min: 5 }]}
            placeholder="请输入至少五个字符"
          />
        </>
      ) : (
        <Result
          status="success"
          title="操作成功"
          subTitle="一系列的信息描述，很短同样也可以带标点。"
          extra={
            <Button type="primary" onClick={onDone}>
              知道了
            </Button>
          }
          className={styles.formResult}
        />
      )}
    </ModalForm>
  );
};

export default OperationModal;
