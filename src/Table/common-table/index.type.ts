import { ColumnProps, TableProps, TablePaginationConfig } from 'antd/lib/table';
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors';
import { LiteralUnion } from 'antd/lib/_util/type';
import { typeValueRefers } from '.';
import { typeFormItemRefers } from '../common-search';

export interface IColumnTypes<T> extends ColumnProps<T> {
  type?: string;
  enums?: EnumsType | TagEnumsType;
  primary?: number | boolean;

  // ⬇️配合commonSearchForm
  // 是否在table中隐藏该列
  hidden?: boolean;
  // 是否添加该项的搜索到commonSearchForm中
  searchable?: boolean | number;
  // 在searchForm中显示的key title
  searchLabel?: string;
  // 在searchForm中显示的ui类型
  searchType?: keyof typeof typeFormItemRefers | string;
  // 占据的格栅宽度
  searchColSpan?: number;
  // 渲染form块
  searchRender?: React.ReactNode | React.ReactNode[];
  // 自定义搜索formName，即搜索条件中的key
  searchKey?: string | symbol;
}
export type recordedType = any;
export type IExtraSearchType = Omit<IColumnTypes<unknown>, 'primary' | 'searchable'>;

export interface ITableTypes<T> extends TableProps<T> {
  columns: IColumnTypes<T>[];
  extraSearchs?: IExtraSearchType[];
  tools?: React.ReactNode;
  onSearch?: (params: Record<any, string>) => void;
  onReset?: () => void;
  keepAlive?: string | ((d?: any, c?: any) => string);
}
export type SupporttedColumnTypes = keyof typeof typeValueRefers;
export type ColorTypes = LiteralUnion<PresetColorType | PresetStatusColorType, string>;
export type EnumsType = Record<string, { text?: string; color?: ColorTypes; status?: string; desc?: string }>;
export type TagEnumsType = { [key: string]: string };
