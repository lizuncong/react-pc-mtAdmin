import React, { memo } from 'react';
import { Table, Input } from 'antd';


// 倒置表格，专门用于后端按列的结构返回数据的情况，即如果后端返回的数据为:
// list: [
//   {
//     sizeName: 'XL',
//     orderNum: 10,
//     stockNum: 24,
//   },
// ],
// 则可以使用这个表格


/**
 * colWidth 每一列的宽度
 * titleIndex表头标题字段名称
 * */
const TransFormTable = memo(({
  colWidth,
  titleIndex, dataSource, columns, className, ...others
}) => {
  const cols = columns.map((col, index) => ({
    title: col[titleIndex] || col.title,
    render: (text, record, indx) => (record.renderCol
      ? record.renderCol(col, index) : col[record.dataIndex]
    ),
    ...(col.width || colWidth) && {
      width: col.width || colWidth,
    },
  }));
  const params = {};
  if (colWidth) {
    params.width = cols.reduce((sum, cur) => sum + cur.width, 0);
  }
  return (
    <Table
      className={className}
      {...others}
      {...params}
      columns={cols}
      dataSource={dataSource}
    />
  );
});


export default TransFormTable;

// 使用方法如下：
// 后端返回的数据
// const data = [
//   {
//     sizeName: 'L', // 尺码
//     orderNum: 20, // 下单数
//     stockNum: 32, // 库存数
//   },
//   {
//     sizeName: 'XL', // 尺码
//     orderNum: 28, // 下单数
//     stockNum: 26, // 库存数
//   },
//   {
//     sizeName: 'XXL', // 尺码
//     orderNum: 19, // 下单数
//     stockNum: 56, // 库存数
//   },
// ];
//
// const colTemp = [ // 构造前两列的数据
//   {
//     sizeName: '尺码',
//     width: 140,
//     orderNum: '下单数',
//     stockNum: '库存数',
//   },
//   {
//     sizeName: '总数',
//     width: 120,
//     orderNum: data.reduce((sum, cur) => sum + Number(cur.orderNum), 0),
//     stockNum: data.reduce((sum, cur) => sum + Number(cur.stockNum), 0),
//   },
// ];
// const rows = [
//   {
//     dataIndex: 'orderNum',
//     renderCol: (col, index) => (
//       index < 2
//         ? col.orderNum
//         : (
//           <Input
//             value={col.orderNum}
//             placeholder=""
//             onChange={(e) => {
//               col.orderNum = e.target.value;
//             }}
//           />
//         )
//     ),
//   },
//   {
//     dataIndex: 'stockNum',
//   },
// ];
//
// const Demo = memo(() => (
//   <TransFormTable
//     colWidth={100}
//     titleIndex="sizeName"
//     columns={[...colTemp, ...data]}
//     dataSource={rows}
//   />
// ));
