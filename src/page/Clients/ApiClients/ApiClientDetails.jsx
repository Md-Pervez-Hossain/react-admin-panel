import React from "react";
import toast from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa6";

const ApiClientDetails = ({ data }) => {
  const { username, email, organization, smsSent, apiKey, secret } = data;

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("SuccessFully Copied");
      })
      .catch((err) => {
        toast.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-primary/10 rounded-lg">
          <tr>
            <th className="px-4 py-3 whitespace-nowrap text-[14px] font-medium">
              User Name
            </th>
            <th className="px-4 py-3 whitespace-nowrap text-[14px] font-medium">
              Email
            </th>
            <th className="px-4 py-3 whitespace-nowrap text-[14px] font-medium">
              Organization
            </th>
            <th className="px-4 py-3 whitespace-nowrap text-[14px] font-medium">
              Sms Sent
            </th>
            <th className="px-4 py-3 whitespace-nowrap text-[14px] font-medium">
              Api Key
            </th>
            <th className="px-4 py-3 whitespace-nowrap text-[14px] font-medium">
              Secret Key
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {username}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {email}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {organization}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              {smsSent}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span>{apiKey}</span>
                <FaRegCopy
                  className="cursor-pointer"
                  onClick={() => copyToClipboard(apiKey)}
                />
              </div>
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span>{secret}</span>
                <FaRegCopy
                  className="cursor-pointer"
                  onClick={() => copyToClipboard(secret)}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApiClientDetails;
