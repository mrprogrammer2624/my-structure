import { Form, Input, Button, Select, Checkbox } from "antd";

const { Option } = Select;

export const AskOurExpert = () => {

  return (
    <div style={{ maxWidth: "400px", paddingTop: "50px" }} className="bg-white">
      <h2>Ask Our Expert!</h2>
      <form name="callback-form">
        <span
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: "Please enter your full name!" }]}
        >
          <Input placeholder="TC Full Name" />
        </span>

        <span
          name="mobileNo"
          label="Mobile No"
          rules={[
            { required: true, message: "Please enter your mobile number!" },
          ]}
        >
          <Input placeholder="TC Mobile No" />
        </span>

        <span
          name="email"
          label="Email Address"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input placeholder="TC Email Address" />
        </span>

        <span
          name="state"
          label="Select State"
          rules={[{ required: true, message: "Please select your state!" }]}
        >
          {/* <Select placeholder="Select State">
            <Option value="state1">TC State 1</Option>
            <Option value="state2">TC State 2</Option>
            <Option value="state3">TC State 3</Option>
          </Select> */}
        </span>

        <span>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#FFD700", borderColor: "#FFD700" }}
          >
            REQUEST A CALL BACK
          </Button>
        </span>

        <span>
          <Checkbox>
            I HAVE READ & AGREED TO THE COMPANY'S TERMS AND CONDITIONS,
            DISCLAIMER AND REFUND POLICY, AND ALSO READY TO ACCEPT CALLS, SMS,
            EMAILS, ETC.
          </Checkbox>
        </span>
      </form>
    </div>
  );
};
