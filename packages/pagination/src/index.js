import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import { Paginator } from './utils';
import './index.scss';

class Page extends React.Component {
  static propTypes = {
    activePageClassName: PropTypes.string,
    renderPage: PropTypes.func,
    onClick: PropTypes.func,
    pageNumber: PropTypes.number,
    activePage: PropTypes.number,
    isDisabled: PropTypes.bool,
  };

  handleClick(e) {
    const { isDisabled, pageNumber, activePage } = this.props;

    if (pageNumber === activePage) {
      return;
    }

    e.preventDefault();
    if (isDisabled) {
      return;
    }

    this.props.onClick(pageNumber);
  }

  render() {
    const { activePageClassName, pageNumber, activePage } = this.props;

    return (
      <li
        className={`blng-pagination__page${(pageNumber === activePage) ? ` ${activePageClassName}` : ''}`}
        onClick={e => this.handleClick(e)}
      >
        {this.props.renderPage()}
      </li>
    );
  }
}

/**
 * @example ../README.md
 */
export default class Pagination extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    activePageClassName: PropTypes.string,
    totalItemsCount: PropTypes.number,
    onChange: PropTypes.func,
    activePage: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    pageRangeDisplayed: PropTypes.number,
    renderPrevPage: PropTypes.func,
    renderNextPage: PropTypes.func,
    renderFirstPage: PropTypes.func,
    renderLastPage: PropTypes.func,
    isShowFirstAndLastOption: PropTypes.bool,
  };

  static defaultProps = {
    activePageClassName: 'blng-pagination__page--selected',
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    activePage: 1,
    renderPrevPage: () => (<i className="fa fa-chevron-left"></i>),
    renderNextPage: () => (<i className="fa fa-chevron-right"></i>),
    renderFirstPage: () => (<span>First </span>),
    renderLastPage: () => (<span>| Last</span>),
    isShowFirstAndLastOption: true,
  };

  buildPages() {
    const pages = [];
    const {
      activePageClassName,
      itemsCountPerPage,
      pageRangeDisplayed,
      activePage,
      totalItemsCount,
      onChange,
      isShowFirstAndLastOption,
    } = this.props;

    const paginationInfo = Paginator(itemsCountPerPage, pageRangeDisplayed, totalItemsCount, activePage);

    if (totalItemsCount <= itemsCountPerPage) {
      return;
    }

    for (
      let i = paginationInfo.firstPage;
      i <= paginationInfo.lastPage;
      i++
    ) {
      pages.push(
        <Page
          activePageClassName={activePageClassName}
          isActive={i === activePage}
          key={i}
          pageNumber={i}
          activePage={this.props.activePage}
          renderPage={() => (
            <span>{i}</span>
          )}
          hasPreviousPage={paginationInfo.hasPreviousPage}
          hasNextPage={paginationInfo.hasNextPage}
          onClick={onChange}
          isShowFirstAndLastOption={isShowFirstAndLastOption}
        />,
      );
    }

    if (paginationInfo.hasPreviousPage) {
      pages.unshift(
        <Page
          activePageClassName={activePageClassName}
          key={'prev'}
          pageNumber={paginationInfo.previousPage}
          activePage={this.props.activePage}
          onClick={onChange}
          renderPage={() => (
            <span>{this.props.renderPrevPage()}</span>
          )}
          isDisabled={!paginationInfo.hasPreviousPage}
          isShowFirstAndLastOption={isShowFirstAndLastOption}
        />,
      );
    }

    if (paginationInfo.hasNextPage) {
      pages.push(
        <Page
          activePageClassName={activePageClassName}
          key={'next'}
          pageNumber={paginationInfo.nextPage}
          activePage={this.props.activePage}
          onClick={onChange}
          renderPage={() => (
            <span>{this.props.renderNextPage()}</span>
          )}
          isDisabled={!paginationInfo.hasNextPage}
          isShowFirstAndLastOption={isShowFirstAndLastOption}
        />,
      );
    }

    return pages;
  }

  render() {
    const { className, totalItemsCount, itemsCountPerPage, pageRangeDisplayed, activePage, isShowFirstAndLastOption } = this.props;
    const paginationInfo = Paginator(itemsCountPerPage, pageRangeDisplayed, totalItemsCount, activePage);
    const pages = this.buildPages();

    return (<ul className={getClassNames('blng-pagination', className)}>
      {
        activePage >= pageRangeDisplayed && isShowFirstAndLastOption &&
        <span
          className="blng-pagination__page-first-last"
          onClick={() => this.props.onChange(1)}
        >
          {this.props.renderFirstPage()}
        </span>
      }
      {pages}
      {
        activePage >= pageRangeDisplayed && activePage < paginationInfo.totalPages && isShowFirstAndLastOption &&
        <span
          className="blng-pagination__page-first-last"
          onClick={() => this.props.onChange(paginationInfo.totalPages)}
        >
          {this.props.renderLastPage()}
        </span>
      }
    </ul>
    );
  }
}
