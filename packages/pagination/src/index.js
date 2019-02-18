import React from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';
import { Paginator } from './Paginator';
import './index.scss';

class Page extends React.Component {
  static propTypes = {
    className: PropTypes.className,
    highlightedColor: PropTypes.string,
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
    const { className, highlightedColor, pageNumber, activePage } = this.props;

    return (
      <li
        style={{ color: pageNumber === activePage ? highlightedColor : null }}
        className={getClassNames('pagination-container__page', className)}
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
    highlightedColor: PropTypes.string,
    totalItemsCount: PropTypes.number,
    onChange: PropTypes.func,
    activePage: PropTypes.number,
    itemsCountPerPage: PropTypes.number,
    pageRangeDisplayed: PropTypes.number,
    renderPrevPage: PropTypes.func,
    renderNextPage: PropTypes.func,
  };

  static defaultProps = {
    highlightedColor: '#ed7040',
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    activePage: 1,
  };

  buildPages() {
    const pages = [];
    const {
      className,
      highlightedColor,
      itemsCountPerPage,
      pageRangeDisplayed,
      activePage,
      totalItemsCount,
      onChange,
    } = this.props;

    const paginationInfo = Paginator(itemsCountPerPage, pageRangeDisplayed, totalItemsCount, activePage);

    for (
      let i = paginationInfo.firstPage;
      i <= paginationInfo.lastPage;
      i++
    ) {
      pages.push(
        <Page
          className={className}
          highlightedColor={highlightedColor}
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
        />,
      );
    }

    if (paginationInfo.hasPreviousPage) {
      pages.unshift(
        <Page
          className={className}
          highlightedColor={highlightedColor}
          key={'prev'}
          pageNumber={paginationInfo.previousPage}
          activePage={this.props.activePage}
          onClick={onChange}
          renderPage={() => (
            <span>{this.props.renderPrevPage()}</span>
          )}
          isDisabled={!paginationInfo.hasPreviousPage}
        />,
      );
    }

    if (paginationInfo.hasNextPage) {
      pages.push(
        <Page
          className={className}
          highlightedColor={highlightedColor}
          key={'next'}
          pageNumber={paginationInfo.nextPage}
          activePage={this.props.activePage}
          onClick={onChange}
          renderPage={() => (
            <span>{this.props.renderNextPage()}</span>
          )}
          isDisabled={!paginationInfo.hasNextPage}
        />,
      );
    }

    return pages;
  }

  render() {
    const { className, totalItemsCount, itemsCountPerPage, pageRangeDisplayed, activePage } = this.props;
    const paginationInfo = Paginator(itemsCountPerPage, pageRangeDisplayed, totalItemsCount, activePage);
    const pages = this.buildPages();

    return (<ul className="pagination-container">
      {
        activePage >= pageRangeDisplayed &&
        <span
          className={getClassNames('pagination-container__page-first-last', className)}
          onClick={() => this.props.onChange(1)}
        >
          First |
        </span>
      }
      {pages}
      {
        activePage >= pageRangeDisplayed && activePage < paginationInfo.totalPages &&
        <span
          className={getClassNames('pagination-container__page-first-last', className)}
          onClick={() => this.props.onChange(paginationInfo.totalPages)}
        >
          | Last
        </span>
      }
    </ul>
    );
  }
}
