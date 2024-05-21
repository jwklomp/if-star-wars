import * as React from "react";
import { ReactNode } from "react";
import { isEmpty } from "ramda";
import { Else, If, Then } from "react-if";

interface ListProps<T> {
  items: Array<T>;
  renderItem: (item: T, index: number) => React.ReactNode;
  emptyComponent: ReactNode;
}

const List = <T,>({
  items,
  renderItem,
  emptyComponent,
}: ListProps<T>): React.ReactElement => (
  <If condition={isEmpty(items)}>
    <Then>{emptyComponent}</Then>
    <Else>
      {items.map((item, index) => (
        <>{renderItem(item, index)}</>
      ))}
    </Else>
  </If>
);

export default List;
