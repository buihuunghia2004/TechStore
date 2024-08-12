import React, { useEffect } from "react";
import { Button, Form, Input, Space, Table, Tag, Upload } from "antd";
import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import styles from "../styles/CategoryPage.module.css";
import axiosInstance from "../config/axiosInstance";
const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
    render: (text, record, index) => index + 1,
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Hình ảnh",
    dataIndex: "image",
    key: "image",
    render: (text) => (
      <img
        className={styles.image}
        src={
          text
        }
      />
    ),
  },
  {
    title: "Sản phẩm",
    dataIndex: "productCount",
    key: "product",
    render: (text, record) => 0,
  },
  {
    title: "Thao tác",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Sửa</a>
        <a>Xóa</a>
      </Space>
    ),
  },
];

const CategoryPage = () => {
  const [isFormExpanded, setIsFormExpanded] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    const fetchCategorys = async () => {
      const response = await axiosInstance.get("/category");
      setCategories(response.data);
    };
    fetchCategorys();
  }, []);
  return (
    <div className={styles.container}>
      <Button onClick={() => setIsFormExpanded(!isFormExpanded)} type="primary" icon={<PlusOutlined />}>
        Thêm Danh Mục Mới
      </Button>
      { isFormExpanded &&
        <Form style={{ marginTop: 20 }}>
          <Form.Item label="Tên danh mục">
            <Input />
          </Form.Item>
          <div style={{ display: "flex" }}>
            <Form.Item
              label="Hình ảnh"
              valuePropName="fileList"
              getValueFromEvent={() => {}}
              style={{ marginRight: 40 }}
            >
              <Upload action="/upload.do" listType="picture-card">
                <button
                  style={{
                    border: 0,
                    background: "none",
                  }}
                  type="button"
                >
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </button>
              </Upload>
            </Form.Item>
            <Form.Item
              label="Icon"
              valuePropName="fileList"
              getValueFromEvent={() => {}}
            >
              <Upload action="/upload.do" listType="picture-card">
                <button
                  style={{
                    border: 0,
                    background: "none",
                  }}
                  type="button"
                >
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </button>
              </Upload>
            </Form.Item>
          </div>
          <Button type="primary">Thêm Danh Mục</Button>
        </Form>
      }
      <Table columns={columns} dataSource={categories} />
    </div>
  );
};
export default CategoryPage;
