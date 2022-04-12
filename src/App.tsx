import "./styles.css";
import { TabPane, Tabs } from "@douyinfe/semi-ui";
import DraggableDemo from "./draggableDemo";
import ReactFlowDemo from "./reactFlowDemo";
import { ErrorBoundary } from "react-error-boundary";

export default function App() {
  return (
    <div onClick={console.log}>
      <h1>Home</h1>
      <ErrorBoundary fallback={<div>Error</div>}>
        <Tabs type="line">
          <TabPane tab="Draggable" itemKey="1">
            <DraggableDemo />
          </TabPane>
          <TabPane tab="ReactFlow" itemKey="2">
            <ReactFlowDemo />
          </TabPane>
        </Tabs>
      </ErrorBoundary>
    </div>
  );
}
