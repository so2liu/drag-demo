import { Form, Tooltip } from "@douyinfe/semi-ui";
import { IconHelpCircle } from "@douyinfe/semi-icons";
import React from "react";
import ReactFlow, {
  addEdge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Node,
  Edge
} from "react-flow-renderer";
import { MarkerType } from "react-flow-renderer";

const { Option } = Form.Select;
const CustomForm: React.FC = (props) => {
  return (
    <Form onValueChange={(values) => console.log(values)}>
      <Form.Select field="Role" label="角色" style={{ width: 176 }}>
        <Option value="admin">管理员</Option>
        <Option value="user">普通用户</Option>
        <Option value="guest">访客</Option>
      </Form.Select>
      <Form.Input field="UserName" label="用户名" style={{ width: 80 }} />
      <Form.Input
        field="Password"
        label={{
          text: "密码",
          extra: (
            <Tooltip content="详情">
              <IconHelpCircle style={{ color: "--semi-color-text-1" }} />
            </Tooltip>
          )
        }}
        style={{ width: 176 }}
      />
    </Form>
  );
};

export const initNodes: Node[] = [
  {
    id: "1",
    type: "CustomForm",
    data: {},
    position: { x: 250, y: 0 }
  }
];

export const initEdges: Edge[] = [];

const onInit = (reactFlowInstance: any) =>
  console.log("flow loaded:", reactFlowInstance);

const nodeTypes = { CustomForm };

const ReactFlowDemo = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={onInit}
        nodeTypes={nodeTypes}
        attributionPosition="top-right"
      >
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowDemo;
