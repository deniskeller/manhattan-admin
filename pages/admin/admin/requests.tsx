import React from 'react';
import Admin from '@layouts/Admin/Admin';
import { faker } from '@faker-js/faker';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { Table, Button } from '@tw/components/index';

const RequestsPage = () => {
  const columnHelper = createColumnHelper<Data>();

  const firstNameColumn = columnHelper.accessor('firstName', {
    header: 'First Name',
    cell: (info) => info.getValue(),
  });

  const lastNameColumn = columnHelper.accessor('lastName', {
    header: 'Last Name',
    enableSorting: false,
    cell: (info) => info.getValue(),
  });

  const emailColumn = columnHelper.accessor('email', {
    header: 'Email',
    cell: (info) => info.getValue(),
  });

  const phoneColumn = columnHelper.accessor('phone', {
    header: 'Phone',
    cell: (info) => info.getValue(),
  });

  const addressColumn = columnHelper.accessor('address', {
    header: 'Address',
    cell: (info) => info.getValue(),
  });

  const cityColumn = columnHelper.accessor('city', {
    header: 'City',
    cell: (info) => info.getValue(),
    footer: () => 'Total',
  });

  const columns = [
    firstNameColumn,
    lastNameColumn,
    emailColumn,
    phoneColumn,
    addressColumn,
    cityColumn,
  ] as ColumnDef<Data, unknown>[];

  type Data = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    company: string;
  };
  function createRandomData(): Data[] {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: i,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        company: faker.company.companyName(),
      });
    }
    return data;
  }

  const data = React.useMemo(() => {
    return createRandomData();
  }, []);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [value, setValue] = React.useState('firstName');
  const [search, setSearch] = React.useState('');
  return (
    <Admin>
      <div>
        <Table
          after={<Button>Simple</Button>}
          data={data}
          columns={columns}
          pagination={{
            currentPage,
            totalPages: 30,
            onPageChange: (page) => {
              setCurrentPage(page);
            },
          }}
          onRowClick={(row) => {
            console.log(row);
          }}
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
            onSearch: (search) => {
              console.log(search);
            },
            onChange: (value) => {
              setValue(value);
            },
            value,
            search,
            onSearchChange: (value) => {
              setSearch(value);
            },
          }}
          searchPagination={{
            options: [
              {
                value: '10',
                label: '10',
              },
              {
                value: '20',
                label: '20',
              },
              {
                value: '30',
                label: '30',
              },
            ],
            value: pageSize.toString(),
            onChange: (value) => {
              setPageSize(parseInt(value));
            },
            onDefaultClick: () => {
              setPageSize(10);
              setValue('firstName');
              setSearch('');
            },
          }}
        />
      </div>
    </Admin>
  );
};

export default RequestsPage;
