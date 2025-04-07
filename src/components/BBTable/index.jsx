import { Table, Skeleton, Empty } from "antd";
import styles from "./BBTable.module.css";
import clsx from "clsx";
import { Icons } from "@constants";

export const BBTable = ({
  id,
  name,
  dataTestId,
  tableColumn,
  tableDataSource,
  tableClassName,
  tableContainerClassName,
  scroll,
  onChange,
  tableLayout,
  sortDirections,
  showSorterTooltip,
  loading,
  filters,
  showPagination,
  defaultPageSize = 10,
  ...rest
}) => {
  return (
    <div className={clsx(tableContainerClassName)}>
      <Table
        id={id}
        name={name}
        data-test-id={dataTestId}
        columns={tableColumn.map((column) => ({
          ...column,
          render: loading
            ? () => (
                <Skeleton
                  key={column.dataIndex}
                  title={true}
                  paragraph={false}
                  active
                />
              )
            : column.render
            ? column.render
            : (text) => text,
        }))}
        dataSource={tableDataSource}
        className={clsx(tableClassName, styles.table)}
        scroll={scroll}
        onChange={onChange}
        tableLayout={tableLayout}
        sortDirections={sortDirections}
        showSorterTooltip={showSorterTooltip}
        pagination={
          showPagination
            ? {
                defaultPageSize: defaultPageSize ? defaultPageSize : 50,
                position: ["bottomLeft"],
                pageSizeOptions: [5, 10, 15, 20, 25, 30, 50],
                showSizeChanger: true,
                responsive: true,
                locale: { items_per_page: "" },
              }
            : false
        }
        locale={{
          emptyText: loading ? (
            tableColumn.map((column, index) => {
              return (
                <div
                  key={index}
                  style={{
                    padding: "12px",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  {column.dataIndex && (
                    <Skeleton
                      dataIndex={column.dataIndex}
                      title={true}
                      paragraph={false}
                      active
                    />
                  )}
                </div>
              );
            })
          ) : (
            <Empty />
          ),
        }}
        filters={filters}
        {...rest}
      />
    </div>
  );
};
