import React from 'react';
import Table from '../../../components/table';
import styles from './index.module.less';
import Search from './search';
import HeaderBtnContainer from './headerBtnContaier';

const columns = [
  {
    title: '门店名称',
    dataIndex: 'storeName',
    key: 'storeName',
    render: (text) => <span>{text}</span>,
  },
  {
    title: '负责人',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '联系方式',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '门店照片',
    dataIndex: 'photos',
    key: 'photos',
    render: (photos) => (
      <img className={styles.img} src={`/api/public/upload/${photos[0]}`} alt="" />
    ),
  },
  {
    title: '门店地址',
    key: 'address',
    dataIndex: 'address',
    render: (text, record) => (
      <span>
        {record.address}
      </span>
    ),
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>编辑</span>
    ),
  },
];

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    const { history } = this.props;
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Search />
        <div className={styles.tableContainer}>
          <HeaderBtnContainer
            history={history}
          />
          <Table
            columns={columns}
            dataSource={data}
          />
        </div>
      </div>
    );
  }
}

export default Index;
