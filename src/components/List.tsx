import { ReactNode } from "react";
import { isEmpty, isNotEmpty } from "ramda";
import { Else, If, Then } from "react-if";

interface ListProps<T> {
  empty: ReactNode;
  header?: ReactNode;
  items: Array<T>;
  renderItem: (item: T) => ReactNode;
}

/**
 * Abstract rendering of a list. Provides a way to render an optional header, a list of items, and empty list message.
 */
const List = <T,>({
  empty,
  header,
  items,
  renderItem,
}: ListProps<T>): React.ReactElement => (
  <If condition={isEmpty(items)}>
    <Then>{empty}</Then>
    <Else>
      <If condition={isNotEmpty(header)}>{header}</If>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </Else>
  </If>
);

export default List;
