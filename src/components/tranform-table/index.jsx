import React, { memo } from 'react';
import { Table } from 'antd';


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
