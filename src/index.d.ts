declare var GFP: FlowChartingPlugin;
type mxCell = any;
type mxMouseEvent = any;

declare module gf {
  declare interface TSelectString {
    text: string;
    value: string;
  }

  declare interface TSelectNumber {
    text: string;
    value: number;
  }

  declare interface TSelectBoolean {
    text: string;
    value: boolean;
  }

  declare type TSourceType = 'xml' | 'csv'; // Source type
  declare type TPropertieKey = 'id' | 'value' | 'form'; //Type properties for finding cells
  declare interface TSelectSource extends TSelectString {
    value: TSourceType;
  }

  declare interface TIFlowchartOptionsScope extends ng.IScope {
    flowchartHandler: any;
    editor: FlowchartOptionsCtrl;
    GFP: FlowChartingPlugin;
    ctrl: any;
  }

  // Styles
  declare type TStyleArray = ['fillColor', 'strokeColor', 'fontColor', 'imageBorder', 'imageBackground', 'shape', 'overflow'];
  declare type TStyleColorKeys = 'fillColor' | 'strokeColor' | 'fontColor' | 'imageBorder' | 'imageBackground';
  declare type TStyleColorList = { text: string; value: TStyleColor.Keys }[];
  declare type TStyleEventKeys = 'shape' | 'rotation' | 'visibility' | 'fontSize' | 'blink' | 'barPos' | 'text' | 'opacity' | 'textOpacity' | 'fold';
  declare type TStyleEventList = { text: string; value: TStyleEventKeys; type: 'number' | 'text' }[];
  declare type TStyleKey = TStyleColor.Keys | TStyleEventKeys;

  declare interface TSelectStyle extends TSelectString {
    value: TStyleColor.Keys;
  }

  // ToolTip
  declare type TDirectionKeys = 'v' | 'h';
  declare type TDirectionList = { text: string; value: TDirectionKeys }[];
  declare type TGraphTypeKeys = 'line' | 'bar';
  declare type TGraphTypeList = { text: string; value: TGraphTypeKeys }[];
  declare interface TGraphTypeInt extends TSelectString {
    value: TGraphTypeKeys;
  }
  declare type TGraphCoordinate = { x?: number; y: number };
  declare type TGraphScaleKeys = 'linear' | 'log';
  declare type TGraphScaleList = { text: string; value: TGraphScaleKeys }[];
  declare type TGraphSizeKeys = '100%' | '100px' | '200px' | '400px';
  declare type TGraphSizeList = { text: string; value: TGraphSizeKeys }[];
  declare interface TGraphSizeInt extends TSelectString {
    value: TGraphSizeKeys;
  }

  declare interface TSelectGraphScale extends TSelectString {
    value: TGraphScaleKeys;
  }

  // Range or value
  declare type TValueMappingKeys = 1 | 2;
  declare type TValueMappingList = { text: string; value: TValueMappingKeys }[];
  declare interface TValueMappingInt extends TSelectNumber {
    value: TValueMappingKeys;
  }

  // Aggregation
  declare type TAggregationKeys = 'first' | 'current' | 'min' | 'max' | 'total' | 'avg' | 'count' | 'delta' | 'range' | 'diff';
  declare type TAggregationList = { text: string; value: TAggregationKeys }[];
  declare interface TSelectAggregation extends TSelectString {
    value: TAggregationKeys;
  }

  // Metric
  declare type TMetricTypeKeys = 'table' | 'serie';
  declare type TMetricTypeList = { text: string; value: TMetricTypeKeys }[];

  // Rules
  declare type TLinkOnKeys = 'wc' | 'a';
  declare type TLinkOnList = { text: string; value: TLinkOnKeys }[];

  declare type TTooltipOn = 'wc' | 'a';
  declare type TTooltipOnList = { text: string; value: TTooltipOn }[];

  declare type TColorOnKeys = 'n' | 'wc' | 'a';
  declare type TColorOnList = { text: string; value: TColorOnKeys }[];

  declare type TTextOnKeys = 'n' | 'wmd' | 'wc' | 'co';
  declare type TTextOnList = { text: string; value: TTextOnKeys }[];

  declare type TValueTypeKeys = 'number' | 'string' | 'date';
  declare type TValueTypeList = { text: string; value: TValueTypeKeys }[];

  declare type TTextMethodKeys = 'content' | 'pattern' | 'as' | 'anl';
  declare type TTextMethodList = { text: string; value: TTextMethodKeys }[];
  declare type TDateFormatKeys = 'YYYY-MM-DD HH:mm:ss' | 'YYYY-MM-DD HH:mm:ss.SSS' | 'MM/DD/YY h:mm:ss a' | 'MMMM D, YYYY LT' | 'YYYY-MM-DD';
  declare type TDateFormatList = { text: string; value: TDateFormatKeys }[];

  declare type TVariableKeys = '_rule' | '_level' | '_value' | '_color' | '_formated';
  declare interface TIRulesHandlerData {
    rulesData: TIRuleData[];
  }
  declare interface TIRuleData {
    order: number;
    pattern: string;
    metricType: TMetricTypeKeys;
    alias: string;
    refId: string;
    column: string;
    aggregation: TAggregationKeys;
    unit: string;
    type: string;
    hidden: boolean;
    decimals: number;
    colors: string[];
    reduce: boolean;
    dateFormat: TDateFormatKeys;
    thresholds: number[];
    stringThresholds: string[];
    invert: boolean;
    gradient: boolean;
    overlayIcon: boolean;
    tooltip: boolean;
    tooltipLabel: string;
    tooltipColors: boolean;
    tooltipOn: TTooltipOn;
    tpDirection: TDirectionKeys;
    tpGraph: boolean;
    tpGraphSize: TGraphSizeKeys;
    tpGraphType: TGraphTypeKeys;
    tpGraphLow: number | null;
    tpGraphHigh: number | null;
    tpGraphScale: TGraphScaleKeys;
    shapeProp: TPropertieKey;
    shapeRegEx: boolean;
    shapeData: TShapeMapData[];
    textProp: TPropertieKey;
    textRegEx: boolean;
    textData: TTextMapData[];
    linkProp: TPropertieKey;
    linkRegEx: boolean;
    linkData: TlinkMapData[];
    eventProp: TPropertieKey;
    eventRegEx: boolean;
    eventData: TeventMapData[];
    mappingType: number;
    valueData: TValueMapData[];
    rangeData: TRangeMapData[];
    sanitize: boolean;
  }

  declare interface TGFMapData {
    pattern: string;
    hidden: boolean;
  }

  declare interface TShapeMapData extends TGFMapData {
    style: TStyleColor.Keys;
    colorOn: TColorOnKeys;
  }

  declare interface TEventMapData extends TGFMapData {
    style: TStyleEventKeys;
    eventOn: number;
    value: string;
  }

  declare interface TTextMapData extends TGFMapData {
    textReplace: TTextMethodKeys;
    textPattern: string;
    textOn: TTextOnKeys;
  }

  declare interface TlinkMapData extends TGFMapData {
    linkUrl: string;
    linkParams: boolean;
    linkOn: TLinkOnKeys;
  }

  declare interface TRangeMapData {
    from: string | undefined;
    to: string | undefined;
    text: string | undefined;
    hidden: boolean;
  }

  declare interface TValueMapData {
    value: string | undefined;
    text: string | undefined;
    hidden: boolean;
  }

  // mxGraph API
  // mxGraph API
  declare var mxCellHighlight: any;
  declare var mxEvent: any;
  declare var mxClient: any;
  declare var mxUtils: any;
  declare var mxCodec: any;
  declare var mxConstants: any;
  declare var mxRectangle: any;
  declare var mxUrlConverter: any;

  declare type mxCellOverlay = any;

  // For mapping object
  declare interface TIOnMappingObj {
    active: boolean;
    object: GFMap | null;
    id: string | null;
    prop: string | null;
    $scope: ng.IScope | null;
  }

  // Export of id and label
  declare interface TICellsProp {
    id: string[];
    value: string[]; // Label
    form: string[];
  }

  // Inspect
  declare interface TInspectOptionsScope extends ng.IScope {
    flowchartHandler: any;
    editor: InspectOptionsCtrl;
    GFP: FlowChartingPlugin;
    ctrl: any; //TODO: define type
    testData: any;
  }

  // Flowcharts
  declare interface TFlowchartData {
    name: string;
    xml: string;
    csv: string;
    download: boolean;
    type: TSourceType;
    url: string;
    zoom: string;
    center: boolean;
    scale: boolean;
    lock: boolean;
    allowDrawio: boolean;
    enableAnim: boolean;
    tooltip: boolean;
    grid: boolean;
    bgColor: string | null;
    editorUrl: string;
    editorTheme: string;
  }

  declare interface TFlowchartHandlerData {
    flowcharts: TFlowchartData[];
  }

  declare interface TMappingOptionsScope extends ng.IScope {
    rulesHandler: any;
    flowchartHandler: FlowchartHandler;
    editor: MappingOptionsCtrl;
    GFP: FlowChartingPlugin;
    ctrl: any;
  }
}
