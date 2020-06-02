import React from 'react';
import styles from './index.module.less';
import Card from './components/card';
import { getProductList } from '../../../api/product';
import Search from './components/search';
import HeaderBtnContainer from './components/headerBtnContaier';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNo: 0,
      pageSize: 20,
      searchCondition: {},
      data: [],
    };
  }

  componentWillMount() {
    this.getList();
  }

  async getList() {
    const { pageNo, pageSize, searchCondition } = this.state;
    const result = await getProductList({ pageNo, pageSize, ...searchCondition });
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
    const { data, searchCondition } = this.state;
    return (
      <div className={styles.container}>
        <Search
          searchCondition={searchCondition}
          onChange={(value, formItem) => {
            this.setState({
              searchCondition: value,
            }, () => {
              if (formItem.type !== 'input') {
                this.getList();
              }
            });
          }}
        />
        <div className={styles.tableContainer}>
          <HeaderBtnContainer
            history={history}
            refresh={() => {
              this.getList();
            }}
          />
          <div className={styles.cardContainer}>
            { data.map((info) => (
              <Card
                info={info}
                key={info.productId}
                refresh={() => {
                  this.getList();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
