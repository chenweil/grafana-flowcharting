import _ from 'lodash';
class GFCONSTANT {
  // CONFIG
  CONF_PATH_LIBS = 'libs/';
  CONF_PATH_DRAWIO = 'libs/drawio/';
  CONF_PATH_STATIC = 'static/';
  CONF_PATH_PARTIALS = 'partials/';
  CONF_PATH_STYLES = 'styles/';
  CONF_FILE_PLUGINJSON = './plugin.json';
  CONF_FILE_DEFAULTDIO = 'static/defaultGraph.drawio';
  CONF_FILE_DEFAULTCSV = 'static/defaultGraph.csv';
  CONF_FILE_SHAPESTXT = 'static/shapes.txt';
  CONF_FILE_APPJS = 'libs/drawio/js/app.min.js';
  CONF_FILE_SHAPESJS = 'libs/drawio/js/shapes.min.js';
  CONF_FILE_VIEWERJS = 'libs/drawio/js/viewer.min.js';
  CONF_FILE_PRECONFIGJS = 'libs/drawio/js/PreConfig.js';
  CONF_FILE_POSTCONFIGJS = 'libs/drawio/js/PostConfig.js';
  CONF_TOOLTIPS_DELAY = 200;
  CONF_GRAPHHOVER_DELAY = 50;
  CONF_COLORS_STEPS = 5;
  CONF_COLORS_MS = 50;
  CONF_ANIMS_STEP = 5;
  CONF_ANIMS_MS = 50;
  CONF_BLINK_COLOR = '#f5f242';

  // GLOBAL VARIABLE
  VAR_STG_SHAPES = 'shapestext';
  VAR_TBL_SHAPES = 'shapesarray';
  VAR_STR_VIEWERJS = 'viewer.min.js';
  VAR_STR_SHAPESJS = 'shapes.min.js';
  VAR_STG_CTXROOT = 'contextroot';
  VAR_NUM_GHTIMESTAMP = 'graph-hover-timestamp';
  VAR_OBJ_TEMPLATESRV = 'templatesrv';
  VAR_OBJ_CTRL = 'ctrl';
  VAR_OBJ_DASHBOARD = 'dashboard';
  VAR_MAP_INTERVAL = 'interval';
  VAR_MAP_TIMEOUT = 'timeout';
  VAR_STR_RULENAME: gf.TVariableKeys = '_rule';
  VAR_NUM_LEVEL: gf.TVariableKeys = '_level';
  VAR_NUM_VALUE: gf.TVariableKeys = '_value';
  VAR_STR_FORMATED: gf.TVariableKeys = '_formated';
  VAR_STR_COLOR: gf.TVariableKeys = '_color';

  // CONDITIONS
  TOOLTIP_APPLYON: gf.TTooltipOnList = [
    { text: '警告/关键', value: 'wc' },
    { text: '永远', value: 'a' },
  ];
  COLOR_APPLYON: gf.TColorOnList = [
    { text: '决不', value: 'n' },
    { text: '警告/关键', value: 'wc' },
    { text: '永远', value: 'a' },
  ];
  TEXT_APPLYON: gf.TTextOnList = [
    { text: '决不', value: 'n' },
    { text: '当指标显示', value: 'wmd' },
    { text: '警告/关键', value: 'wc' },
    { text: '仅关键', value: 'co' },
  ];
  LINK_APPLYON: gf.TLinkOnList = [
    { text: '警告/关键', value: 'wc' },
    { text: '永远', value: 'a' },
  ];

  // TYPES
  VALUE_TYPES: gf.TValueTypeList = [
    { text: '数字', value: 'number' },
    { text: '字符串', value: 'string' },
    { text: '日期', value: 'date' },
  ];
  METRIC_TYPES: gf.TMetricTypeList = [
    { text: '序列', value: 'serie' },
    { text: '表格', value: 'table' },
  ];
  SOURCE_TYPES: gf.TSourceTypeList = [
    { text: 'XML', value: 'xml' },
    { text: 'CSV', value: 'csv' },
  ];
  DIOTHEME_TYPES: gf.TDioThemeList = [
    { text: '黑暗', value: 'dark' },
    { text: '明亮', value: 'kennedy' },
    { text: '手机', value: 'minimal' },
    { text: '地图', value: 'atlas' },
  ];
  IDENT_TYPES: { text: string; value: gf.TPropertieKey }[] = [
    { text: 'Id', value: 'id' },
    { text: '标签', value: 'value' },
  ];
  AGGREGATION_TYPES: gf.TAggregationList = [
    { text: '第一个', value: 'first' },
    { text: '第一个（非空）', value: 'first_notnull' },
    { text: '最后', value: 'current' },
    { text: '最后（非空）', value: 'current_notnull' },
    { text: '最小', value: 'min' },
    { text: '最大', value: 'max' },
    { text: '总和', value: 'total' },
    { text: '平均', value: 'avg' },
    { text: '总数', value: 'count' },
    { text: '增量', value: 'delta' },
    { text: '范围', value: 'range' },
    { text: '差异', value: 'diff' },
    { text: '最后一个时间点', value: 'last_time' },
  ];
  TOOLTIP_GRAPH_TYPES: gf.TGraphTypeList = [
    { text: '线', value: 'line' },
    { text: '直方图', value: 'bar' },
  ];
  TOOLTIP_GRAPH_SCALE_TYPES: gf.TGraphScaleList = [
    { text: '线性', value: 'linear' },
    { text: '对数', value: 'log' },
  ];
  TOOLTIP_GRAPH_SIZE_TYPES: gf.TGraphSizeList = [
    { text: '可调', value: '100%' },
    { text: '小', value: '100px' },
    { text: '中等', value: '200px' },
    { text: '大', value: '400px' },
  ];
  TOOLTIP_DIRECTION_TYPES: gf.TDirectionList = [
    { text: '垂直', value: 'v' },
    { text: '水平 ', value: 'h' },
  ];
  VALUE_DATEFORMAT_TYPES: gf.TDateFormatList = [
    { text: 'YYYY-MM-DD HH:mm:ss', value: 'YYYY-MM-DD HH:mm:ss' },
    { text: 'YYYY-MM-DD HH:mm:ss.SSS', value: 'YYYY-MM-DD HH:mm:ss.SSS' },
    { text: 'MM/DD/YY h:mm:ss a', value: 'MM/DD/YY h:mm:ss a' },
    { text: 'MMMM D, YYYY LT', value: 'MMMM D, YYYY LT' },
    { text: 'YYYY-MM-DD', value: 'YYYY-MM-DD' },
  ];

  VALUEMAPPINGTYPES: gf.TValueMappingList = [
    { text: '值到文本', value: 1 },
    { text: '范围到文本', value: 2 },
  ];

  // METHODS
  TEXTMETHODS: gf.TTextMethodList = [
    { text: '所有内容', value: 'content' },
    { text: '字符串', value: 'pattern', placeholder: '/RegEx/' },
    { text: '追加（空格）', value: 'as' },
    { text: '追加（新行）', value: 'anl' },
  ];
  COLORMETHODS: gf.TStyleColorList = [
    { text: '形状笔划/边框', value: 'strokeColor' },
    { text: '形状填充', value: 'fillColor' },
    { text: '形状梯度', value: 'gradientColor' },
    { text: '标签字体颜色', value: 'fontColor' },
    { text: '标签背景色', value: 'labelBackgroundColor' },
    { text: '标签边框颜色', value: 'labelBorderColor' },
    { text: '图像背景', value: 'imageBackground' },
    { text: '图像边框', value: 'imageBorder' },
  ];
  EVENTMETHODS: gf.TStyleEventList = [
    { text: '形状：更改表单（文本）', value: 'shape', type: 'text', placeholder: '形状名称' },
    { text: '形状：旋转形状（0-360）', value: 'rotation', type: 'number', placeholder: '0-360', default: 0 },
    { text: '形状：闪烁（频率ms）', value: 'blink', type: 'number', placeholder: '数字（毫秒）', default: 500 },
    { text: '形状：隐藏/显示（0 | 1）', value: 'visibility', type: 'number', placeholder: '0 或 1', typeahead: '0|1' },
    { text: '形状：高度（数字）', value: 'height', type: 'number', placeholder: '数字（像素）' },
    { text: '形状：宽度（数字）', value: 'width', type: 'number', placeholder: '数字（像素）' },
    { text: '形状：调整大小（百分比）', value: 'size', type: 'number', placeholder: '百分比' },
    { text: '形状：不透明度（0-100）', value: 'opacity', type: 'number', placeholder: '0-100', default: 100 },
    {
      text: '形状：渐变方向',
      value: 'gradientDirection',
      type: 'text',
      placeholder: '方向名称',
      default: 'south',
      typeahead: 'south|east|north|west',
    },
    {
      text: '形状：折叠/展开（0 | 1）',
      value: 'fold',
      type: 'number',
      placeholder: '0 or 1',
      typeahead: '0|1',
      default: '1',
    },
    { text: '形状：更改条形图中的位置（0-100）', value: 'barPos', type: 'number', placeholder: '0-100' },
    {
      text: '形状：水平翻转（0 | 1）',
      value: 'flipH',
      type: 'number',
      placeholder: '0 或 1',
      typeahead: '0|1',
    },
    { text: '形状：垂直翻转（0 | 1）', value: 'flipV', type: 'number', placeholder: '0 或 1', typeahead: '0|1' },
    {
      text: '箭头：更改起始标记（文本）',
      value: 'startArrow',
      type: 'text',
      placeholder: '标记',
      typeahead:
        'none|classic|classicThin|block|blockThin|open|openThin|oval|diamond|diamondThin|openAsync|async|box|halfCircle|dash|cross|circlePlus|circle|ERone|ERmandOne|ERoneToMany|ERzeroToOne',
    },
    {
      text: '箭头：更改结束标记（文本）',
      value: 'endArrow',
      type: 'text',
      placeholder: '标记',
      typeahead:
        'none|classic|classicThin|block|blockThin|open|openThin|oval|diamond|diamondThin|openAsync|async|box|halfCircle|dash|cross|circlePlus|circle|ERone|ERmandOne|ERoneToMany|ERzeroToOne',
    },
    {
      text: '箭头：动画流（频率ms）',
      value: 'class_mxEdgeFlow',
      type: 'number',
      placeholder: '数字（毫秒）',
    },
    { text: '标签:替换文本(文本)', value: 'text', type: 'text', placeholder: '文本' },
    { text: '标签:字体大小(数字)', value: 'fontSize', type: 'number', placeholder: '数字' },
    { text: '标签:不透明度(数字)', value: 'textOpacity', type: 'number', placeholder: '0-100', default: 100 },
    { text: '图片:更改URL(文本)', value: 'image', type: 'text', placeholder: 'Url' },
  ];

  LOCALVARIABLENAMES: gf.TVariableList = [
    { text: '规则的名称', value: this.VAR_STR_RULENAME },
    { text: '根据阈值的当前颜色', value: this.VAR_STR_COLOR },
    { text: '当前原始值（根据聚合）', value: this.VAR_NUM_VALUE },
    { text: '根据阈值确定当前水平', value: this.VAR_NUM_LEVEL },
    { text: '根据类型指定的当前格式化值', value: this.VAR_STR_FORMATED },
  ];
}

export class GFVariables {
  _variables: Map<string, any>;
  constructor() {
    this._variables = new Map();
  }

  /**
   * Get the full available vars names
   *
   * @static
   * @returns {string[]}
   * @memberof GFVariables
   */
  static getAvailableLocalVarNames(): string[] {
    return $GF.CONSTANTS.LOCALVARIABLENAMES.map(x => '${' + x.value + '}');
  }

  /**
   * set or redefine varaible
   *
   * @param {string} key
   * @param {*} value
   * @returns {this}
   * @memberof GFVariables
   */
  set(key: gf.TVariableKeys, value: any): this {
    this._variables.set(key, value);
    return this;
  }

  unset(key: gf.TVariableKeys): this {
    this._variables.delete(key);
    return this;
  }

  /**
   * Get variable value
   *
   * @param {string} key
   * @returns {*}
   * @memberof GFVariables
   */
  get(key: gf.TVariableKeys): any {
    return this._variables.get(key);
  }

  /**
   * Return the name of variables without ${}
   *
   * @returns {string[]}
   * @memberof GFVariables
   */
  keys(): string[] {
    return Array.from(this._variables.keys());
  }

  /**
   * Return all local declared variables and grafana variables
   *
   * @returns {string[]}
   * @memberof GFVariables
   */
  getFullVarsNames(): string[] {
    return $GF.getGrafanaVars().concat(this.getVarsNames());
  }

  /**
   * Get the full names of declared local vars
   *
   * @returns {string[]}
   * @memberof GFVariables
   */
  getVarsNames(): string[] {
    return this.keys().map(x => '${' + x + '}');
  }

  /**
   * Clear all variables
   *
   * @returns {this}
   * @memberof GFVariables
   */
  clear(): this {
    this._variables.clear();
    return this;
  }

  /**
   * Replace text with variables
   *
   * @param {string} text
   * @returns {string}
   * @memberof GFVariables
   */
  replaceText(text: string): string {
    try {
      let templateSrv = $GF.getVar($GF.CONSTANTS.VAR_OBJ_TEMPLATESRV);
      text = templateSrv !== undefined ? templateSrv.replaceWithText(text) : text;
      for (let [key, value] of this._variables) {
        text = text.replace('${' + key + '}', value);
      }
    } catch (error) {
      return text;
    }
    return text;
  }

  /**
   * Replace and eval text with variables
   *
   * @param {string} text
   * @returns {string}
   * @memberof GFVariables
   */
  eval(text: string): string {
    let t = this.replaceText(text);
    return $GF.utils.evalIt(t);
  }
}

class GFLog {
  static DEBUG = 0;
  static INFO = 1;
  static WARN = 2;
  static ERROR = 3;
  static logLevel = GFLog.WARN;
  static logDisplay = true;
  constructor() {}

  static init(): GFLog {
    return new GFLog();
  }

  /**
   * If message must be displayed
   *
   * @param {number} level (DEBUG : 0, INFO : 1, WARN:2, ERROR:3)
   * @returns {boolean}
   * @memberof Log
   */
  static toDisplay(level: number): boolean {
    if (GFLog.logDisplay !== undefined && GFLog.logDisplay === true) {
      if (GFLog.logLevel !== undefined && level >= GFLog.logLevel) {
        return true;
      }
    }
    return false;
  }

  /**
   * Display debug message in console
   *
   * @param {string} title
   * @param {((any | undefined))} obj
   * @memberof Log
   */
  async debug(...args) {
    if (GFLog.toDisplay(GFLog.DEBUG)) {
      const title = args.shift();
      console.debug(`GF DEBUG : ${title}`, ...args);
    }
  }

  /**
   * Display warn message in console
   *
   * @param {string} title
   * @param {((any | undefined))} obj
   * @memberof Log
   */
  async warn(...args) {
    if (GFLog.toDisplay(GFLog.WARN)) {
      const title = args.shift();
      console.warn(`GF WARN : ${title}`, ...args);
    }
  }

  /**
   * Display info message in console
   *
   * @param {string} title
   * @param {((any | undefined))} obj
   * @memberof Log
   */
  async info(...args) {
    if (GFLog.toDisplay(GFLog.INFO)) {
      const title = args.shift();
      console.info(`GF INFO : ${title}`, ...args);
    }
  }

  /**
   * Display error message in console
   *
   * @param {string} title
   * @param {((any | undefined))} obj
   * @memberof Log
   */
  async error(...args) {
    if (GFLog.toDisplay(GFLog.ERROR)) {
      const title = args.shift();
      console.error(`GF ERROR : ${title}`, ...args);
    }
  }
}

class GFPlugin {
  static data: any = require('./plugin.json');
  static defaultContextRoot = '/public/plugins/agenty-flowcharting-panel/';
  static contextRoot: string;
  constructor() {}

  /**
   * init GFPlugin
   *
   * @static
   * @param {*} $scope
   * @param {*} templateSrv
   * @returns {GFPlugin}
   * @memberof GFPlugin
   */
  static init($scope: any, templateSrv: any, dashboard: any): GFPlugin {
    let plug = new GFPlugin();
    this.contextRoot = GFPlugin.defaultContextRoot;
    if ($scope === undefined) {
      this.contextRoot = __dirname;
      if (this.contextRoot.length > 0) {
        $GF.setVar($GF.CONSTANTS.VAR_STG_CTXROOT, this.contextRoot);
      }
    } else {
      this.contextRoot = $scope.$root.appSubUrl + this.defaultContextRoot;
    }
    $GF.setVar($GF.CONSTANTS.VAR_OBJ_TEMPLATESRV, templateSrv);
    $GF.setVar($GF.CONSTANTS.VAR_STG_CTXROOT, this.contextRoot);
    $GF.setVar($GF.CONSTANTS.VAR_OBJ_DASHBOARD, dashboard);
    return plug;
  }

  getRepo(): string {
    let url = '';
    GFPlugin.data.info.links.forEach((link: { name: string; url: string }) => {
      if (link.name === 'Documentation') {
        url = link.url;
      }
    });
    return url;
  }

  /**
   * Get version of plugin
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getVersion(): string {
    return GFPlugin.data.info.version;
  }

  /**
   * Get root path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getRootPath(): string {
    return $GF.getVar($GF.CONSTANTS.VAR_STG_CTXROOT);
  }

  /**
   * Get libs path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getLibsPath(): string {
    return `${$GF.getVar($GF.CONSTANTS.VAR_STG_CTXROOT)}libs/`;
  }

  /**
   * Get Draw.io libs path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getDrawioPath(): string {
    return `${this.getLibsPath()}drawio/`;
  }

  /**
   * Get statics path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getStaticPath(): string {
    return `${this.getRootPath()}static/`;
  }

  /**
   * Get mxBasePath
   * mxBasePath: Specifies the path in mxClient.basePath.
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getMxBasePath(): string {
    return `${this.getDrawioPath()}mxgraph/`;
  }

  /**
   * Return Style path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getMxStylePath(): string {
    return `${this.getDrawioPath()}styles/`;
  }

  /**
   * Return shapes xml path for draw.io
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getShapesPath(): string {
    return `${this.getDrawioPath()}/shapes/`;
  }

  /**
   * Return partial path
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getPartialPath(): string {
    return `${this.getRootPath()}partials/`;
  }

  /**
   * Return stencils js path for draw.io
   *
   * @returns {string}
   * @memberof GFPlugin
   */
  getStencilsPath(): string {
    return `${this.getDrawioPath()}/stencils/`;
  }

  getMxCssPath(): string {
    return `${this.getDrawioPath()}styles/`;
  }

  getMxResourcePath(): string {
    return `${this.getMxBasePath()}css/`;
  }

  getMxImagePath(): string {
    return `${this.getMxBasePath()}images/`;
  }
}

/**
 * Trace Perf class
 *
 * @class GFTrace
 */
class GFTrace {
  static enable = false;
  static trc = new Map();
  static fn = new Map();
  static indent = 0;
  trace:
    | {
        Name: string;
        Id: string;
        Args: any;
        Return: any;
        Before: number;
        End: number | undefined;
        ExecTime: number | undefined;
        Indent: number;
      }
    | undefined;

  constructor(fn?: string) {
    if (GFTrace.enable && fn !== undefined) {
      this.trace = {
        Name: fn,
        Id: $GF.utils.uniqueID(),
        Args: undefined,
        Return: undefined,
        Before: Date.now(),
        End: undefined,
        ExecTime: undefined,
        Indent: GFTrace.indent,
      };
      GFTrace.trc.set(this.trace.Id, this.trace);
    }
  }

  static init(): GFTrace {
    return new GFTrace();
  }

  before(
    fn: string | undefined
  ):
    | GFTrace
    | {
        after: () => void;
      } {
    if (GFTrace.enable && fn !== undefined) {
      const t = new GFTrace(fn);
      GFTrace.indent++;
      GFTrace._inc(fn);
      return t;
    }
    return { after: () => {} };
  }

  static _inc(fn) {
    let f = GFTrace.fn.get(fn);
    if (f === undefined) {
      f = {
        Calls: 0,
        Function: fn,
        TotalTimes: 0,
      };
    }
    f.Calls++;
    GFTrace.fn.set(fn, f);
  }

  async after() {
    if (GFTrace.enable && this.trace !== undefined) {
      if (this.trace) {
        this.trace.End = Date.now();
        GFTrace.indent--;
      }
    }
  }

  async clear() {
    if (GFTrace.enable) {
      GFTrace.trc.clear();
      GFTrace.fn.clear();
    }
  }

  enable() {
    GFTrace.enable = true;
  }

  disable() {
    GFTrace.enable = false;
  }

  isEnabled() {
    return GFTrace.enable;
  }

  async resume() {
    if (GFTrace.enable) {
      let tb: any[] = [];
      let fn: any[] = [];
      GFTrace.trc.forEach(trace => {
        trace.ExecTime = trace.End - trace.Before;
        const f = GFTrace.fn.get(trace.Name);
        f.TotalTimes += trace.ExecTime;
        tb.push(trace);
      });
      console.table(tb, ['Indent', 'Name', 'ExecTime']);
      GFTrace.fn.forEach(f => {
        fn.push(f);
      });
      console.table(fn, ['Function', 'Calls', 'TotalTimes']);
      this.clear();
    }
  }
}

export class $GF {
  static _globalvars: GFVariables = new GFVariables();
  static CONSTANTS: GFCONSTANT = new GFCONSTANT();
  static log: GFLog = GFLog.init();
  static trace: GFTrace = GFTrace.init();
  static plugin: GFPlugin;
  static graphHover = false;
  static GHTimeStamp = 0;
  static DEBUG = false;
  static utils: {
    decode: (data: string, encode: boolean, deflate: boolean, base64: boolean) => string;
    encode: (data: string, encode: boolean, deflate: boolean, base64: boolean) => string;
    loadJS: (fname: string) => void;
    sleep: (ms: number, mess?: string) => void;
    uniqueID: () => string;
    // getRatioColor: (ratio: number, colorStart: string, colorEnd: string) => string;
    matchString: (str: string, pattern: string | undefined, regex?: boolean) => boolean;
    stringToJsRegex: (str: string) => RegExp;
    isencoded: (data: string) => boolean;
    minify: (text: string) => string;
    prettify: (text: string) => string;
    getMarky: () => any;
    // getStepColors: (colorStart: string, colorEnd: string, colorCount: number) => string[];
    evalIt: (code: string) => string;
    loadFile: (fname: string) => string;
    $loadFile: (fname: string) => string;
    evalRaw: (code: string) => void;
    addScript: (src: string) => void;
  } = require('./utils_raw');

  static init($scope: any, templateSrv: any, dashboard: any): $GF {
    this.plugin = GFPlugin.init($scope, templateSrv, dashboard);
    return this;
  }

  static me(): $GF {
    return this;
  }

  /**
   * Create and get local variables container
   *
   * @static
   * @returns {GFVariables}
   * @memberof GFGlobal
   */
  static createLocalVars(): GFVariables {
    let _v = new GFVariables();
    return _v;
  }

  /**
   * Get global variables container
   *
   * @static
   * @returns {GFVariables}
   * @memberof GFGlobal
   */
  static getGlobalVars(): GFVariables {
    if ($GF._globalvars === undefined) {
      $GF._globalvars = new GFVariables();
    }
    return $GF._globalvars;
  }

  static getGrafanaVars(): string[] {
    const templateSrv = $GF.getVar($GF.CONSTANTS.VAR_OBJ_TEMPLATESRV);
    if (templateSrv !== undefined && templateSrv !== null) {
      return _.map(templateSrv.variables, variable => `\${${variable.name}}`);
    }
    return [];
  }

  /**
   * Get global variable value
   *
   * @static
   * @param {*} key
   * @returns {*}
   * @memberof GFGlobal
   */
  static getVar(key: any): any {
    return $GF.getGlobalVars().get(key);
  }

  /**
   * set global variable with value
   *
   * @static
   * @param {*} key
   * @param {*} value
   * @memberof GFGlobal
   */
  static setVar(key: any, value: any) {
    $GF.getGlobalVars().set(key, value);
  }

  static unsetVar(key: any) {
    $GF.getGlobalVars().unset(key);
  }

  /**
   * Get all available variables name
   *
   * @static
   * @returns {string[]}
   * @memberof GFGlobal
   */
  static getFullAvailableVarNames(): string[] {
    return GFVariables.getAvailableLocalVarNames().concat($GF.getGrafanaVars());
  }

  static getIntervalCounter(begin: number, end: number, count: number, method: gf.TCounterKeys = 'linear'): number[] {
    let result: number[] = [];
    const distance = end - begin;
    const step = Math.round(distance / count);
    let current = begin;
    let index = 0;
    for (index = 0; index < count; index++) {
      current += step;
      result.push(current);
    }
    result[index] = end;
    return result;
  }

  static setUniqTimeOut(fc: CallableFunction, timer: number, id?: string): string {
    let timeout: Map<string, number> = $GF.getVar($GF.CONSTANTS.VAR_MAP_TIMEOUT);
    if (timeout === undefined) {
      timeout = new Map();
      $GF.setVar($GF.CONSTANTS.VAR_MAP_TIMEOUT, timeout);
    }
    if (id !== undefined) {
      this.clearUniqTimeOut(id);
    }
    const thread = window.setTimeout(fc, timer);
    id = id === undefined ? thread.toString() : id;
    timeout.set(id, thread);
    return id;
  }

  static clearUniqTimeOut(id: string) {
    const timeout: Map<string, number> = $GF.getVar($GF.CONSTANTS.VAR_MAP_TIMEOUT);
    if (timeout !== undefined) {
      try {
        const tm = timeout.get(id);
        if (tm !== undefined) {
          timeout.delete(id);
          window.clearTimeout(tm);
        }
      } catch (error) {
        $GF.log.warn('无法清除超时线程', id, error);
      }
    }
  }

  /**
   * Add a new Intervall (window.setInterval)
   *
   * @static
   * @param {CallableFunction} fc
   * @param {number} timer
   * @returns {number}
   * @memberof GFGlobal
   */
  static setUniqInterval(fc: CallableFunction, timer: number, id?: string): string {
    let interval: Map<string, number> = $GF.getVar($GF.CONSTANTS.VAR_MAP_INTERVAL);
    if (interval === undefined) {
      interval = new Map();
      $GF.setVar($GF.CONSTANTS.VAR_MAP_INTERVAL, interval);
    }
    if (id !== undefined) {
      this.clearUniqInterval(id);
    }
    const thread = window.setInterval(fc, timer);
    id = id === undefined ? thread.toString() : id;
    interval.set(id, thread);
    return id;
  }

  /**
   * Add/clear a  Intervall (window.clearInterval)
   *
   * @static
   * @param {string} id
   * @memberof GFGlobal
   */
  static clearUniqInterval(id: string) {
    let interval: Map<string, number> = $GF.getVar($GF.CONSTANTS.VAR_MAP_INTERVAL);
    if (interval !== undefined) {
      try {
        const int = interval.get(id);
        interval.delete(id);
        window.clearInterval(int);
      } catch (error) {
        $GF.log.warn('无法清除间隔线程', id, error);
      }
    }
  }

  /**
   * Load a file into variables
   *
   * @static
   * @param {string} varName
   * @param {string} fileName
   * @memberof GFGlobal
   */
  static async loadLocalFile(varName: string, fileName: string) {
    let v = $GF.getVar(varName);
    if (v === undefined) {
      const contextroot = $GF.getVar($GF.CONSTANTS.VAR_STG_CTXROOT);
      if (contextroot !== undefined) {
        const filePath = `${contextroot}/${fileName}`;
        if (!!window.fetch) {
          // exécuter ma requête fetch ici
          fetch(filePath)
            .then(response => {
              if (response.ok) {
                response
                  .text()
                  .then(text => {
                    $GF.log.info('loadLocalFile called succesfully', filePath);
                    $GF.setVar(varName, text);
                    return text;
                  })
                  .catch(error => $GF.log.error('Error when download text file', filePath, error));
              }
            })
            .catch(error => $GF.log.error('Error when download file', filePath, error));
        } else {
          // Faire quelque chose avec XMLHttpRequest?
          const txt = $GF.utils.loadFile(fileName);
          if (txt) {
            $GF.setVar(varName, $GF.utils.loadFile(fileName));
            return txt;
          }
        }
      } else {
        $GF.log.warn('loadLocalFile Contexroot : ', contextroot);
      }
    }
    return false;
  }

  static setGraphHover(timestamp: number) {
    if (this.isGraphHoverEnabled()) {
      this.graphHover = true;
      this.GHTimeStamp = timestamp;
    }
  }

  static unsetGraphHover() {
    this.graphHover = false;
    this.GHTimeStamp = 0;
    // console.log('this.graphHover',this.graphHover);
  }

  static hasGraphHover(): boolean {
    return this.graphHover && this.isGraphHoverEnabled();
  }

  static isGraphHoverEnabled(): boolean {
    const dashboard = this.getVar($GF.CONSTANTS.VAR_OBJ_DASHBOARD);
    return dashboard !== undefined && dashboard.sharedTooltipModeEnabled();
  }

  static getGraphHover(): number | undefined {
    if (this.hasGraphHover()) {
      // return this.getVar($GF.CONSTANTS.VAR_NUM_GHTIMESTAMP);
      return this.GHTimeStamp;
    }
    return undefined;
  }

  /**
   * Return Html for popup with links to documentation
   *
   * @param {string} text
   * @param {string} tagBook
   * @param {string} [tagImage]
   * @returns {string}
   * @memberof $GF
   */
  static popover(text: string, tagBook: string, tagImage?: string): string {
    const url = $GF.plugin.getRepo();
    const images = `${this.plugin.getRepo()}images/`;
    const textEncoded = String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
    const desc = `${textEncoded}`;
    let book = '';
    let image = '';
    if (tagBook) {
      book = `<a href="${url}${tagBook}" target="_blank"><i class="fa fa-book fa-fw"></i>Help</a>`;
    }
    if (tagImage) {
      image = `<a href="${images}${tagImage}.png" target="_blank"><i class="fa fa-image fa-fw"></i>Example</a>`;
    }
    return `
    <div id="popover" style="display:flex;flex-wrap:wrap;width: 100%;">
      <div style="flex:1;height:100px;margin-bottom: 20px;">${desc}</div>
      <div style="flex:1;height:100px;margin-bottom: 20px;">${book}</div>
      <div style="flex-basis: 100%;height:100px;margin-bottom:20px;">${image}</div>
    </div>`;
  }

  static destroy() {
    let interval: Set<any> = $GF.getVar($GF.CONSTANTS.VAR_MAP_INTERVAL);
    if (interval !== undefined) {
      interval.forEach(x => $GF.clearUniqInterval(x));
      interval.clear();
    }
    let timeout: Set<any> = $GF.getVar($GF.CONSTANTS.VAR_MAP_TIMEOUT);
    if (timeout !== undefined) {
      timeout.forEach(x => $GF.clearUniqTimeOut(x));
      timeout.clear();
    }
  }
}
