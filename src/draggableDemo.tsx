import { Popover, Select, Space, Tooltip } from "@douyinfe/semi-ui";
import { useRef } from "react";
import Draggable from "react-draggable";

const useDragItem = (): [React.RefObject<HTMLDivElement>, React.FC] => {
  const ref = useRef<HTMLDivElement>(null);
  const Wrapper: React.FC = (props) => (
    <div ref={ref} style={{ position: "relative" }}>
      {props.children}
    </div>
  );
  return [ref, Wrapper];
};

export default function DraggableDemo() {
  const [selectRef, SelectWrapper] = useDragItem();
  const [popoverRef, PopoverWrapper] = useDragItem();
  const [tooltipRef, TooltipWrapper] = useDragItem();
  return (
    <div className="App">
      <Draggable>
        <div>
          <h1>
            Darg with <code>react-draggable</code>
          </h1>
          <p>
            Drag when popover layer is open, the popover layer will not move
            with the main part.
          </p>
          <p>当有弹出层的时候拖动，弹出层不跟跟着主体移动。</p>
          <h2>Normal Select/Popover/Tooltip</h2>
          <Space spacing={36}>
            <Select defaultValue="f">
              <Select.Option value="f">Female</Select.Option>
              <Select.Option value="m">Male</Select.Option>
            </Select>
            <Popover content="content">Popover</Popover>
            <Tooltip content="content">Tooltip</Tooltip>
          </Space>
          <h2>
            Normal Select/Popover/Tooltip with <code>getPopupContainer</code>
          </h2>
          <Space spacing={36}>
            <SelectWrapper>
              <Select
                defaultValue="f"
                getPopupContainer={() => selectRef.current!}
              >
                <Select.Option value="f">Female</Select.Option>
                <Select.Option value="m">Male</Select.Option>
              </Select>
            </SelectWrapper>
            <PopoverWrapper>
              <Popover
                content="content"
                getPopupContainer={() => popoverRef.current!}
              >
                Popover
              </Popover>
            </PopoverWrapper>
            <TooltipWrapper>
              <Tooltip
                content="content"
                getPopupContainer={() => tooltipRef.current!}
              >
                Tooltip
              </Tooltip>
            </TooltipWrapper>
          </Space>
        </div>
      </Draggable>
    </div>
  );
}
