import React from 'react';
import { Modal } from 'antd';
import Table from '../../../components/table';
import styles from './index.module.less';
import { getCategoryList, deleteCategory } from '../../../api/category';
import EditModal from './add';
import Search from './search';
import HeaderBtnContainer from './headerBtnContaier';
import { insertArray } from '../../../utils';

const columns = (refresh) => [
  {
    title: '分类名称',
    dataIndex: 'categoryName',
    key: 'categoryName',
    render: (text) => <div dangerouslySetInnerHTML={{ __html: text }} />,
  },
  {
    title: '分类编码',
    dataIndex: 'categoryCode',
    key: 'categoryCode',
  },
  {
    title: '创建用户',
    dataIndex: 'createdUser',
    key: 'createdUser',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => insertArray([
      <EditModal
        key="1"
        record={record}
        refresh={refresh}
      >
        <span className={styles.click}>编辑</span>
      </EditModal>,
      <span
        className={styles.click}
        key="2"
        onClick={() => {
          Modal.confirm({
            title: '删除',
            content: `确认删除${record.categoryName}吗？`,
            okText: '确认',
            cancelText: '取消',
            onOk: async () => {
              await deleteCategory({ categoryId: record.categoryId });
              refresh();
            },
          });
        }}
      >
        删除
      </span>,
    ], <span key="3" className={styles.split}>|</span>),
  },
];

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 0,
      pageSize: 20,
      data: [],
    };
  }

  componentWillMount() {
    this.getList();
  }

  async getList() {
    const { pageNo, pageSize } = this.state;
    const result = await getCategoryList({ pageNo, pageSize });
    if (result) {
      const { data: { count, rows } } = result;
      console.log('count...', count);
      this.setState({
        data: rows,
      });
    }
  }

  render() {
    const { history } = this.props;
    const { data } = this.state;
    const cols = columns(() => this.getList());
    return (
      <div className={styles.container}>
        <Search />
        <div className={styles.tableContainer}>
          <HeaderBtnContainer
            history={history}
            refresh={() => {
              this.getList();
            }}
          />
          <Table
            rowKey="categoryId"
            columns={cols}
            dataSource={data}
          />
        </div>
      </div>
    );
  }
}

export default Index;
