import { Link } from "react-router-dom";
import { Icons } from ".";
import { Avatar, Tag } from "antd";

function getItem(label, key, icon, path) {
  return {
    key,
    icon,
    label: path ? <Link to={path}>{label}</Link> : label,
  };
}

export const AdminDashboardAsideMenu = [
  getItem("Dashboard", "/admin", Icons.Dashboard, "/admin"),
  getItem(
    "All Employees",
    "/admin/all-employees",
    Icons.AllEmployees,
    "/admin/all-employees"
  ),
  getItem(
    "All Departments",
    "/admin/all-departments",
    Icons.AllDepartments,
    "/admin/all-departments"
  ),
  getItem(
    "Attendance",
    "/admin/attendance",
    Icons.Attendance,
    "/admin/attendance"
  ),
  getItem("Payroll", "/admin/payroll", Icons.Payroll, "/admin/payroll"),
  getItem("Jobs", "/admin/jobs", Icons.Jobs, "/admin/jobs"),
  getItem(
    "Candidates",
    "/admin/candidates",
    Icons.Candidates,
    "/admin/candidates"
  ),
  getItem("Leaves", "/admin/leaves", Icons.Leaves, "/admin/leaves"),
  getItem("Holidays", "/admin/holidays", Icons.Holidays, "/admin/holidays"),
  getItem("Settings", "/admin/settings", Icons.Settings, "/admin/settings"),
];

function stylguideItem(label, key, path) {
  return {
    key,
    label: path ? <Link to={path}>{label}</Link> : label,
  };
}

export const StyleguideAsideMenu = [
  stylguideItem("Font Family & Size", "/styleguide", "/styleguide"),
  stylguideItem("Button", "/styleguide/button", "button"),
  stylguideItem("Inputs", "/styleguide/input", "input"),
  stylguideItem("CheckBox", "/styleguide/checkbox", "checkbox"),
  stylguideItem("Modals", "/styleguide/modal", "modal"),
  stylguideItem("Table &  Pagination", "/styleguide/table", "table"),
  stylguideItem("Tabs", "/styleguide/tabs", "tabs"),
  stylguideItem("Tags", "/styleguide/tags", "tags"),
];

//

export const columns = [
  {
    title: "Employee Name",
    dataIndex: "name",
    key: "name",
    render: (text) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar style={{ backgroundColor: "#87d068", marginRight: 8 }}>
          {text[0]}
        </Avatar>
        {text}
      </div>
    ),
  },
  {
    title: "Designation",
    dataIndex: "designation",
    key: "designation",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Check In Time",
    dataIndex: "checkInTime",
    key: "checkInTime",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag color={status === "Late" ? "error" : "success"}>{status}</Tag>
    ),
  },
];

export const data = [
  {
    key: "2",
    name: "Jim Green",
    designation: "Project Manager",
    type: "Part-time",
    checkInTime: "09:10 AM",
    status: "Late",
  },
  {
    key: "3",
    name: "Joe Black",
    designation: "UI Designer",
    type: "Contract",
    checkInTime: "08:55 AM",
    status: "On time",
  },
  {
    key: "4",
    name: "Sarah White",
    designation: "HR Manager",
    type: "Full-time",
    checkInTime: "09:15 AM",
    status: "Late",
  },
  {
    key: "5",
    name: "Chris Green",
    designation: "Backend Developer",
    type: "Full-time",
    checkInTime: "08:50 AM",
    status: "On time",
  },
  {
    key: "6",
    name: "Sophia Brown",
    designation: "QA Engineer",
    type: "Contract",
    checkInTime: "09:20 AM",
    status: "Late",
  },
  {
    key: "7",
    name: "Henry Jones",
    designation: "Data Analyst",
    type: "Full-time",
    checkInTime: "09:00 AM",
    status: "On time",
  },
  {
    key: "8",
    name: "Emily Davis",
    designation: "Frontend Developer",
    type: "Part-time",
    checkInTime: "09:25 AM",
    status: "Late",
  },
  {
    key: "9",
    name: "Michael Scott",
    designation: "Sales Manager",
    type: "Full-time",
    checkInTime: "08:45 AM",
    status: "On time",
  },
  {
    key: "1",
    name: "John Brown",
    designation: "Software Developer",
    type: "Full-time",
    checkInTime: "09:00 AM",
    status: "On time",
  },
  {
    key: "10",
    name: "Olivia Johnson",
    designation: "Product Owner",
    type: "Full-time",
    checkInTime: "09:05 AM",
    status: "On time",
  },
  {
    key: "9",
    name: "Michael Scott",
    designation: "Sales Manager",
    type: "Full-time",
    checkInTime: "08:45 AM",
    status: "On time",
  },
  {
    key: "10",
    name: "Olivia Johnson",
    designation: "Product Owner",
    type: "Full-time",
    checkInTime: "09:05 AM",
    status: "On time",
  },
];

//

export const employeeColumns = [
  {
    title: "Employee Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "CTC",
    dataIndex: "ctc",
    key: "ctc",
  },
  {
    title: "Salary Per Month",
    dataIndex: "salaryPerMonth",
    key: "salaryPerMonth",
  },
  {
    title: "Deduction",
    dataIndex: "deduction",
    key: "deduction",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) =>
      status === "Completed" ? (
        <Tag color="green">Completed</Tag>
      ) : (
        <Tag color="warning">Pending</Tag>
      ),
  },
];

export const employeeData = [
  {
    key: "1",
    name: "John Doe",
    ctc: "$50,000",
    salaryPerMonth: "$4,167",
    deduction: "$200",
    status: "Completed",
  },
  {
    key: "2",
    name: "Jane Smith",
    ctc: "$48,000",
    salaryPerMonth: "$4,000",
    deduction: "$150",
    status: "Pending",
  },
  // Add more employees here (total of 20)
  {
    key: "3",
    name: "Michael Johnson",
    ctc: "$55,000",
    salaryPerMonth: "$4,583",
    deduction: "$250",
    status: "Completed",
  },
  {
    key: "4",
    name: "Sarah Williams",
    ctc: "$60,000",
    salaryPerMonth: "$5,000",
    deduction: "$300",
    status: "Pending",
  },
  {
    key: "5",
    name: "Robert Brown",
    ctc: "$47,500",
    salaryPerMonth: "$3,958",
    deduction: "$100",
    status: "Completed",
  },
];

export const menuItems = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: " <SmileOutlined />",
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];


export const scheduleData = [
  {
      date: 'Wednesday, 06 July 2026',
      events: [
          { time: '09:30', title: 'Practical Task Review', role: 'UI/UX Designer' },
          { time: '12:00', title: 'Resume Review', role: 'Magento Developer' },
          { time: '01:30', title: 'Final HR Round', role: 'Sales Manager' },
      ]
  },
  {
      date: 'Thursday, 07 July 2026',
      events: [
          { time: '09:30', title: 'Practical Task Review', role: 'Front end Developer' },
          { time: '11:00', title: 'TL Meeting', role: 'React JS' },
      ]
  }
];