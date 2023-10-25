import "./index.scss";
import { Card, Form, Input, Button } from "antd";
import logo from "@/assests/logo.svg";

const Login = () => {
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* login form */}
        <Form>
          <Form.Item>
            <Input size="large" placeholder="phone number"></Input>
          </Form.Item>
          <Form.Item>
            <Input size="large" placeholder="capcha"></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
