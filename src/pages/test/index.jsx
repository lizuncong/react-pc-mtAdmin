import React, { memo } from 'react';
import { Input } from 'antd';
import TransFormTable from 'components/tranform-table';

const data = [
  {
    sizeName: 'L', // 尺码
    orderNum: 20, // 下单数
    stockNum: 32, // 库存数
  },
  {
    sizeName: 'XL', // 尺码
    orderNum: 28, // 下单数
    stockNum: 26, // 库存数
  },
  {
    sizeName: 'XXL', // 尺码
    orderNum: 19, // 下单数
    stockNum: 56, // 库存数
  },
];

const colTemp = [ // 构造前两列的数据
  {
    sizeName: '尺码',
    width: 140,
    orderNum: '下单数',
    stockNum: '库存数',
  },
  {
    sizeName: '总数',
    width: 120,
    orderNum: data.reduce((sum, cur) => sum + Number(cur.orderNum), 0),
    stockNum: data.reduce((sum, cur) => sum + Number(cur.stockNum), 0),
  },
];
const rows = [
  {
    dataIndex: 'orderNum',
    renderCol: (col, index) => (
      index < 2
        ? col.orderNum
        : (
          <Input
            value={col.orderNum}
            placeholder=""
            onChange={(e) => {
              col.orderNum = e.target.value;
            }}
          />
        )
    ),
  },
  {
    dataIndex: 'stockNum',
  },
];

const Index = memo(() => (
  <TransFormTable
    colWidth={100}
    titleIndex="sizeName"
    columns={[...colTemp, ...data]}
    dataSource={rows}
  />
));


export default Index;
