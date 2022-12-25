//@ts-nocheck
import React, { useCallback, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { Table } from '@tw/components/index';
import { useGetAllApps } from '@store/investors/investorEndpoints';
import { TKybStatus, TKycStatus, TStatus } from '@store/investors/types';
import { useRouter } from 'next/router';
import { BaseLabel, BaseStatus } from '@base/index';

import s from './Investors.module.scss';

const Investors = () => {
  const router = useRouter();
  const query = router.query;
  console.log('query', query); //{name: "Starlink"
  //result: "decline"

  useEffect(() => {
    // @ts-ignore
    if (
      typeof query?.result !== undefined &&
      typeof query?.result?.length !== undefined &&
      query?.result?.length > 0
    ) {
      const message =
        query.result == 'decline'
          ? 'You rejected the application'
          : 'Application accepted';
      delete query.result;
      router.replace(
        {
          pathname: router.pathname,
          query: router.query,
        },
        undefined,
        { shallow: true }
      );
      console.log('setpopup====', query?.result);

      setTimeout(() => {
        toast.success(message, { duration: 100000000 });
      }, 500);
    }
  }, [query.result, router]);

  const columnHelper = createColumnHelper<Data>();

  const firstNameColumn = columnHelper.accessor('firstName', {
    header: 'First Name',
    enableSorting: false,
    enableColumnFilter: false,
    cell: (info) => info.getValue(),
  });

  const lastNameColumn = columnHelper.accessor('lastName', {
    header: 'Last Name',
    enableSorting: false,
    enableColumnFilter: false,
    cell: (info) => info.getValue(),
  });

  const emailColumn = columnHelper.accessor('email', {
    header: 'Email',
    enableSorting: false,
    enableColumnFilter: false,
    cell: (info) => info.getValue(),
  });

  const phoneColumn = columnHelper.accessor('phone', {
    header: 'Phone number',
    enableSorting: false,
    enableColumnFilter: false,
    cell: (info) => (
      <>
        {' '}
        {info.row.original.countryCode}
        {info.getValue()}
      </>
    ),
  });

  const dateColumn = columnHelper.accessor('createdAt', {
    header: 'Date',
    enableColumnFilter: false,
    cell: (info) => (
      <span style={{ color: 'rgba(26, 26, 26, 0.7)' }}>
        {new Date(info.getValue())?.toLocaleDateString() ?? ''}
      </span>
    ),
  });

  const companyColumn = columnHelper.accessor('aboutCompanyObject', {
    header: 'Company name',
    enableSorting: false,
    enableColumnFilter: false,
    cell: (info) => info.getValue()?.companyName,
    /*    footer: () => "Total",*/
  });
  const isNewColumn = columnHelper.accessor('isNew', {
    header: '',
    enableSorting: false,
    enableColumnFilter: false,
    cell: (info) => {
      if (info.getValue()) return <BaseLabel type={'new'}>New</BaseLabel>;
      return <div />;
    },
  });

  const statusColumn = columnHelper.accessor('status', {
    header: 'Status',
    enableSorting: false,
    enableColumnFilter: true,
    cell: (info) => <BaseStatus status={info.getValue()} />,
  });

  const columns = [
    dateColumn,
    companyColumn,
    statusColumn,
    firstNameColumn,
    lastNameColumn,
    emailColumn,
    phoneColumn,
    isNewColumn,
  ] as ColumnDef<Data, unknown>[];

  type Data = {
    aboutCompany: string;
    aboutCompanyObject: {
      companyName: string;
    };
    birthDate: string;
    countryCode: string;
    createdAt: string;
    email: string;
    financial: string;
    firstName: string;
    id: string;
    industries: string;
    isNew: boolean;
    kybStatus: TKybStatus;
    kycStatus: TKycStatus;
    lastName: string;
    password: string;
    phone: string;
    status: TStatus;
    title: string;
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [value, setValue] = React.useState('firstName');
  const [search, setSearch] = React.useState('');
  const [sortingVal, setSortingVal] = React.useState([]);
  const onSortingChange = (val: any) => {
    setSortingVal(val);
  };
  const [filterVal, setFilterVal] = React.useState([]);
  const onFilterChange = (val: any) => {
    setFilterVal(val);
  };
  console.log('sortingVal', sortingVal);
  console.log('filterVal', filterVal);

  const sortingValRef = useRef(sortingVal);
  useEffect(() => {
    sortingValRef.current = sortingVal;
  }, [sortingVal]);

  const searchRef = useRef(search);
  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  const [_getDataTable, { data }] = useGetAllApps();
  const getDataTable = useCallback(
    (arg: any) => {
      console.log('getDataTable!!', arg);
      _getDataTable(arg);
    },
    [_getDataTable]
  );

  useEffect(() => {
    getDataTable({
      page: currentPage,
      limit: pageSize,
      //@ts-ignore
      order: sortingValRef?.current?.[0]?.desc === false ? 'ASC' : 'DESC',
      findBy: value as any,
      //@ts-ignore
      field: sortingValRef.current?.[0]?.id ?? '',
      search: searchRef.current,
      //@ts-ignore
      status: filterVal?.[0]?.length > 0 ? JSON.stringify(filterVal) : '',
    });
  }, [currentPage, pageSize, sortingVal, filterVal, getDataTable, value]);

  const onSearchClick = () => {
    getDataTable({
      page: 1,
      limit: pageSize,
      //@ts-ignore
      order: sortingValRef?.current?.[0]?.desc === false ? 'ASC' : 'DESC',
      findBy: value as any,
      //@ts-ignore
      field: sortingValRef.current?.[0]?.id ?? '',
      search: searchRef.current,
    });
  };

  console.log('data table', data);
  return (
    <div className={s.Investors}>
      <Table
        data={data?.data as any}
        columns={columns}
        filterMultiple={[
          {
            idColumn: 'status',
            filterVal: filterVal,
            onFilterChange: onFilterChange,
            filterItems: [
              { label: 'Declined', value: 'DECLINED' },
              { label: 'Submitted', value: 'SUBMITTED' },
            ],
          },
        ]}
        pagination={{
          currentPage,
          totalPages: data?.totalPage ?? 1,
          onPageChange: (page: any) => {
            console.log('onPageChange', page);
            setCurrentPage(page);
          },
        }}
        onRowClick={(row: any) => {
          console.log('row==', row);
          router.push(`/app/admin/investors/current-investor/${row?.id}`);
        }}
        sortingVal={sortingVal}
        onSortingChange={onSortingChange}
        filters={{
          options: [
            {
              label: 'first name',
              value: 'firstName',
            },
            {
              label: 'last name',
              value: 'lastName',
            },
          ],
          onSearch: (search: any) => {
            console.log('onSearch', search);
            onSearchClick();
          },
          onChange: (value: any) => {
            console.log('ffffff', value);
            setValue(value);
          },
          value,
          search,
          onSearchChange: (value: any) => {
            console.log('onSearchChange:', value);
            setSearch(value);
          },
        }}
        searchPagination={{
          options: [
            {
              value: '2',
              label: '2',
            },
            {
              value: '5',
              label: '5',
            },
            {
              value: '7',
              label: '7',
            },
            {
              value: '10',
              label: '10',
            },
          ],
          value: pageSize.toString(),
          onChange: (value: any) => {
            setPageSize(parseInt(value));
            setCurrentPage(1);
          },
          onDefaultClick: () => {
            setPageSize(10);
            setCurrentPage(1);
            setValue('firstName');
            setSearch('');
            setFilterVal([]);
            setTimeout(onSearchClick, 100);
          },
        }}
      />
    </div>
  );
};

export default Investors;

export type TFilterMultiple = {
  idColumn: string;
  filterVal: string[];
  onFilterChange: (val: string[]) => void;
  filterItems: TItem[];
};
type TItem = {
  label: string;
  value: string;
};
