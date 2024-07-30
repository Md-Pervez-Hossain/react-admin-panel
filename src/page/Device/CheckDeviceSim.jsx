import React from "react";
import { useGetDeviceSimsQuery } from "../../redux/features/sims/simsApi";
import Table from "../../share/Table/Table";

const CheckDeviceSim = ({ data }) => {
  console.log(data);

  const { id } = data;
  const query = `device=${id}`;
  const {
    data: deviceSimData,
    isError,
    isLoading,
    error,
  } = useGetDeviceSimsQuery(query);
  console.log(deviceSimData);
  const header = [
    { header: "Port", accessorKey: "port" },
    {
      header: "IMEI",
      accessorKey: "IMEI",
    },
    {
      header: "Phone",
      accessorKey: "phoneNumber",
      cell: ({ row }) => {
        const { phoneNumber } = row.original;
        return phoneNumber === "" ? "No Phone Number" : phoneNumber;
      },
    },
    { header: "Status", accessorKey: "status" },
    { header: "Signal", accessorKey: "signal" },

    // {
    //   header: "Action",
    //   id: "action",
    //   cell: ({ row }) => {
    //     const itemData = row.original;
    //     const isOpen = dropdownOpenId === itemData.id;

    //     return (
    //       <DropdownMenu
    //         id={itemData.id}
    //         isOpen={isOpen}
    //         toggleDropdown={toggleDropdown}
    //         onEdit={() => openEditModal(itemData)}
    //         onDelete={() => openDeleteModal(itemData)}
    //         onDetails={() => openDetailsModal(itemData)}
    //         editTitle=""
    //         deleteTitle=""
    //         detailsTitle="Check Sim"
    //       />
    //     );
    //   },
    // },
  ];
  let content;
  if (isLoading && !isError) {
    content = <p>Loading</p>;
  }
  if (!isLoading && isError) {
    content = <p>Error</p>;
  }
  if (!isLoading && !isError && deviceSimData?.data?.length === 0) {
    content = <p>No Data Found</p>;
  }
  if (!isLoading && !isError && deviceSimData?.data?.length > 0) {
    content = <Table columns={header} tabelData={deviceSimData?.data} />;
  }
  return (
    <div>
      <h2>{content}</h2>
    </div>
  );
};

export default CheckDeviceSim;
