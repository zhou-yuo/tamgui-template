var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);

// node_modules/@tamagui/shorthands/dist/esm/v4.mjs
var shorthands = {
  // text
  text: "textAlign",
  // view
  b: "bottom",
  bg: "backgroundColor",
  content: "alignContent",
  grow: "flexGrow",
  items: "alignItems",
  justify: "justifyContent",
  l: "left",
  m: "margin",
  maxH: "maxHeight",
  maxW: "maxWidth",
  mb: "marginBottom",
  minH: "minHeight",
  minW: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginHorizontal",
  my: "marginVertical",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingHorizontal",
  py: "paddingVertical",
  r: "right",
  rounded: "borderRadius",
  select: "userSelect",
  self: "alignSelf",
  shrink: "flexShrink",
  t: "top",
  z: "zIndex"
};
var nonCompilerShorthands = [
  ["fd", "flexDirection"],
  ["fb", "flexBasis"],
  ["bblr", "borderBottomLeftRadius"],
  ["bbrr", "borderBottomRightRadius"],
  ["fwr", "flexWrap"],
  ["col", "color"],
  ["ff", "fontFamily"],
  ["fst", "fontStyle"],
  ["tr", "transform"],
  ["tt", "textTransform"],
  ["td", "textDecorationLine"],
  ["va", "verticalAlign"],
  ["ws", "whiteSpace"],
  // @ts-ignore
  ["wb", "wordBreak"],
  ["ww", "wordWrap"],
  ["brc", "borderRightColor"],
  ["brw", "borderRightWidth"],
  ["bs", "borderStyle"],
  ["btc", "borderTopColor"],
  ["btlr", "borderTopLeftRadius"],
  ["btrr", "borderTopRightRadius"],
  ["btw", "borderTopWidth"],
  ["bw", "borderWidth"],
  ["o", "opacity"],
  ["cur", "cursor"],
  ["pe", "pointerEvents"],
  ["ov", "overflow"],
  ["pos", "position"],
  ["dsp", "display"],
  ["fw", "fontWeight"],
  ["fs", "fontSize"],
  ["ls", "letterSpacing"],
  ["lh", "lineHeight"],
  // @ts-ignore
  ["bxs", "boxSizing"],
  ["bxsh", "boxShadow"],
  // @ts-ignore
  ["ox", "overflowX"],
  // @ts-ignore
  ["oy", "overflowY"]
];
Object.assign(shorthands, Object.fromEntries(nonCompilerShorthands));

// node_modules/@tamagui/themes/dist/esm/utils.mjs
function sizeToSpace(v) {
  return v === 0 ? 0 : v === 2 ? 0.5 : v === 4 ? 1 : v === 8 ? 1.5 : v <= 16 ? Math.round(v * 0.333) : Math.floor(v * 0.7 - 12);
}
__name(sizeToSpace, "sizeToSpace");

// node_modules/@tamagui/themes/dist/esm/v4-tokens.mjs
var size = {
  $0: 0,
  "$0.25": 2,
  "$0.5": 4,
  "$0.75": 8,
  $1: 20,
  "$1.5": 24,
  $2: 28,
  "$2.5": 32,
  $3: 36,
  "$3.5": 40,
  $4: 44,
  $true: 44,
  "$4.5": 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284
};
var spaces = Object.entries(size).map(([k, v]) => [k, sizeToSpace(v)]);
var spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);
var space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
};
var zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
};
var radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
};
var tokens = {
  radius,
  zIndex,
  space,
  size
};

// node_modules/@tamagui/create-theme/dist/esm/isMinusZero.mjs
function isMinusZero(value) {
  return 1 / value === Number.NEGATIVE_INFINITY;
}
__name(isMinusZero, "isMinusZero");

// node_modules/@tamagui/create-theme/dist/esm/themeInfo.mjs
var THEME_INFO = /* @__PURE__ */ new Map();
var getThemeInfo = /* @__PURE__ */ __name((theme, name) => THEME_INFO.get(name || JSON.stringify(theme)), "getThemeInfo");
var setThemeInfo = /* @__PURE__ */ __name((theme, info) => {
  const next = {
    ...info,
    cache: /* @__PURE__ */ new Map()
  };
  THEME_INFO.set(info.name || JSON.stringify(theme), next), THEME_INFO.set(JSON.stringify(info.definition), next);
}, "setThemeInfo");

// node_modules/@tamagui/create-theme/dist/esm/createTheme.mjs
var identityCache = /* @__PURE__ */ new Map();
function createThemeWithPalettes(palettes, defaultPalette, definition, options, name, skipCache = false) {
  if (!palettes[defaultPalette]) throw new Error(`No pallete: ${defaultPalette}`);
  const newDef = {
    ...definition
  };
  for (const key in definition) {
    let val = definition[key];
    if (typeof val == "string" && val[0] === "$") {
      const [altPaletteName$, altPaletteIndex] = val.split("."), altPaletteName = altPaletteName$.slice(1), parentName = defaultPalette.split("_")[0], altPalette = palettes[altPaletteName] || palettes[`${parentName}_${altPaletteName}`];
      if (altPalette) {
        const next = getValue(altPalette, +altPaletteIndex);
        typeof next < "u" && (newDef[key] = next);
      }
    }
  }
  return createTheme(palettes[defaultPalette], newDef, options, name, skipCache);
}
__name(createThemeWithPalettes, "createThemeWithPalettes");
function createTheme(palette, definition, options, name, skipCache = false) {
  const cacheKey = skipCache ? "" : JSON.stringify([name, palette, definition, options]);
  if (!skipCache && identityCache.has(cacheKey)) return identityCache.get(cacheKey);
  const theme = {
    ...Object.fromEntries(Object.entries(definition).map(([key, offset]) => [key, getValue(palette, offset)])),
    ...options?.nonInheritedValues
  };
  return setThemeInfo(theme, {
    palette,
    definition,
    options,
    name
  }), cacheKey && identityCache.set(cacheKey, theme), theme;
}
__name(createTheme, "createTheme");
var getValue = /* @__PURE__ */ __name((palette, value) => {
  if (!palette) throw new Error("No palette!");
  if (typeof value == "string") return value;
  const max = palette.length - 1, next = (value === 0 ? !isMinusZero(value) : value >= 0) ? value : max + value, index = Math.min(Math.max(0, next), max);
  return palette[index];
}, "getValue");

// node_modules/@tamagui/create-theme/dist/esm/helpers.mjs
function objectEntries(obj) {
  return Object.entries(obj);
}
__name(objectEntries, "objectEntries");
function objectFromEntries(arr) {
  return Object.fromEntries(arr);
}
__name(objectFromEntries, "objectFromEntries");

// node_modules/@tamagui/create-theme/dist/esm/masks.mjs
var createMask = /* @__PURE__ */ __name((createMask2) => typeof createMask2 == "function" ? {
  name: createMask2.name || "unnamed",
  mask: createMask2
} : createMask2, "createMask");
var skipMask = {
  name: "skip-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    const {
      skip
    } = opts;
    return Object.fromEntries(Object.entries(template).filter(([k]) => !skip || !(k in skip)).map(([k, v]) => [k, applyOverrides(k, v, opts)]));
  }, "mask")
};
function applyOverrides(key, value, opts) {
  let override, strategy = opts.overrideStrategy;
  const overrideSwap = opts.overrideSwap?.[key];
  if (typeof overrideSwap < "u") override = overrideSwap, strategy = "swap";
  else {
    const overrideShift = opts.overrideShift?.[key];
    if (typeof overrideShift < "u") override = overrideShift, strategy = "shift";
    else {
      const overrideDefault = opts.override?.[key];
      typeof overrideDefault < "u" && (override = overrideDefault, strategy = opts.overrideStrategy);
    }
  }
  return typeof override > "u" || typeof override == "string" ? value : strategy === "swap" ? override : value;
}
__name(applyOverrides, "applyOverrides");
var createIdentityMask = /* @__PURE__ */ __name(() => ({
  name: "identity-mask",
  mask: /* @__PURE__ */ __name((template, opts) => skipMask.mask(template, opts), "mask")
}), "createIdentityMask");
var createInverseMask = /* @__PURE__ */ __name(() => ({
  name: "inverse-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    const inversed = objectFromEntries(objectEntries(template).map(([k, v]) => [k, -v]));
    return skipMask.mask(inversed, opts);
  }, "mask")
}), "createInverseMask");
var createShiftMask = /* @__PURE__ */ __name(({
  inverse
} = {}, defaultOptions) => ({
  name: "shift-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    const {
      override,
      overrideStrategy = "shift",
      max: maxIn,
      palette,
      min = 0,
      strength = 1
    } = {
      ...defaultOptions,
      ...opts
    }, values = Object.entries(template), max = maxIn ?? (palette ? Object.values(palette).length - 1 : Number.POSITIVE_INFINITY), out = {};
    for (const [key, value] of values) {
      if (typeof value == "string") continue;
      if (typeof override?.[key] == "number") {
        const overrideVal = override[key];
        out[key] = overrideStrategy === "shift" ? value + overrideVal : overrideVal;
        continue;
      }
      if (typeof override?.[key] == "string") {
        out[key] = override[key];
        continue;
      }
      const isPositive = value === 0 ? !isMinusZero(value) : value >= 0, direction = isPositive ? 1 : -1, invert = inverse ? -1 : 1, next = value + strength * direction * invert, clamped = isPositive ? Math.max(min, Math.min(max, next)) : Math.min(-min, Math.max(-max, next));
      out[key] = clamped;
    }
    return skipMask.mask(out, opts);
  }, "mask")
}), "createShiftMask");
var createWeakenMask = /* @__PURE__ */ __name((defaultOptions) => ({
  name: "soften-mask",
  mask: createShiftMask({}, defaultOptions).mask
}), "createWeakenMask");
var createSoftenMask = createWeakenMask;
var createStrengthenMask = /* @__PURE__ */ __name((defaultOptions) => ({
  name: "strengthen-mask",
  mask: createShiftMask({
    inverse: true
  }, defaultOptions).mask
}), "createStrengthenMask");

// node_modules/@tamagui/create-theme/dist/esm/applyMask.mjs
function applyMask(theme, mask, options = {}, parentName, nextName) {
  const info = getThemeInfo(theme, parentName);
  if (!info) throw new Error(process.env.NODE_ENV !== "production" ? "No info found for theme, you must pass the theme created by createThemeFromPalette directly to extendTheme" : "\u274C Err2");
  const next = applyMaskStateless(info, mask, options, parentName);
  return setThemeInfo(next.theme, {
    definition: next.definition,
    palette: info.palette,
    name: nextName
  }), next.theme;
}
__name(applyMask, "applyMask");
function applyMaskStateless(info, mask, options = {}, parentName) {
  const skip = {
    ...options.skip
  };
  if (info.options?.nonInheritedValues) for (const key in info.options.nonInheritedValues) skip[key] = 1;
  const maskOptions = {
    parentName,
    palette: info.palette,
    ...options,
    skip
  }, template = mask.mask(info.definition, maskOptions), theme = createTheme(info.palette, template);
  return {
    ...info,
    cache: /* @__PURE__ */ new Map(),
    definition: template,
    theme
  };
}
__name(applyMaskStateless, "applyMaskStateless");

// node_modules/@tamagui/create-theme/dist/esm/combineMasks.mjs
var combineMasks = /* @__PURE__ */ __name((...masks2) => ({
  name: "combine-mask",
  mask: /* @__PURE__ */ __name((template, opts) => {
    let current = getThemeInfo(template, opts.parentName), theme;
    for (const mask2 of masks2) {
      if (!current) throw new Error(`Nothing returned from mask: ${current}, for template: ${template} and mask: ${mask2.toString()}, given opts ${JSON.stringify(opts, null, 2)}`);
      const next = applyMaskStateless(current, mask2, opts);
      current = next, theme = next.theme;
    }
    return theme;
  }, "mask")
}), "combineMasks");

// node_modules/@tamagui/theme-builder/dist/esm/ThemeBuilder.mjs
var ThemeBuilder = class {
  static {
    __name(this, "ThemeBuilder");
  }
  constructor(state) {
    this.state = state;
  }
  addPalettes(palettes) {
    return this.state.palettes = {
      // as {} prevents generic string key merge messing up types
      ...this.state.palettes,
      ...palettes
    }, this;
  }
  addTemplates(templates) {
    return this.state.templates = {
      // as {} prevents generic string key merge messing up types
      ...this.state.templates,
      ...templates
    }, this;
  }
  addMasks(masks2) {
    return this.state.masks = {
      // as {} prevents generic string key merge messing up types
      ...this.state.masks,
      ...objectFromEntries(objectEntries(masks2).map(([key, val]) => [key, createMask(val)]))
    }, this;
  }
  // for dev mode only really
  _addedThemes = [];
  addThemes(themes3) {
    return this._addedThemes.push({
      type: "themes",
      args: [themes3]
    }), this.state.themes = {
      // as {} prevents generic string key merge messing up types
      ...this.state.themes,
      ...themes3
    }, this;
  }
  // these wont be typed to save some complexity and because they don't need to be typed!
  addComponentThemes(childThemeDefinition, options) {
    return this.addChildThemes(childThemeDefinition, options), this;
  }
  addChildThemes(childThemeDefinition, options) {
    const currentThemes = this.state.themes;
    if (!currentThemes) throw new Error("No themes defined yet, use addThemes first to set your base themes");
    this._addedThemes.push({
      type: "childThemes",
      args: [childThemeDefinition, options]
    });
    const currentThemeNames = Object.keys(currentThemes), incomingThemeNames = Object.keys(childThemeDefinition), namesWithDefinitions = currentThemeNames.flatMap((prefix) => {
      const avoidNestingWithin = options?.avoidNestingWithin;
      return avoidNestingWithin && avoidNestingWithin.some((avoidName) => prefix.startsWith(avoidName) || prefix.endsWith(avoidName)) ? [] : incomingThemeNames.map((subName) => {
        const fullName = `${prefix}_${subName}`, definition = childThemeDefinition[subName];
        return "avoidNestingWithin" in definition && definition.avoidNestingWithin.some((name) => prefix.startsWith(name) || prefix.endsWith(name)) ? null : [fullName, definition];
      }).filter(Boolean);
    }), childThemes = Object.fromEntries(namesWithDefinitions), next = {
      // as {} prevents generic string key merge messing up types
      ...this.state.themes,
      ...childThemes
    };
    return this.state.themes = next, this;
  }
  build() {
    if (!this.state.themes) return {};
    const out = {}, maskedThemes = [];
    for (const themeName in this.state.themes) {
      const nameParts = themeName.split("_"), parentName = nameParts.slice(0, nameParts.length - 1).join("_"), definitions = this.state.themes[themeName], themeDefinition = Array.isArray(definitions) ? (() => {
        const found = definitions.find(
          // endWith match stronger than startsWith
          (d) => d.parent ? parentName.endsWith(d.parent) || parentName.startsWith(d.parent) : true
        );
        return found || null;
      })() : definitions;
      if (themeDefinition) if ("theme" in themeDefinition) out[themeName] = themeDefinition.theme;
      else if ("mask" in themeDefinition) maskedThemes.push({
        parentName,
        themeName,
        mask: themeDefinition
      });
      else {
        let {
          palette: paletteName = "",
          template: templateName,
          ...options
        } = themeDefinition;
        const parentDefinition = this.state.themes[parentName];
        if (!this.state.palettes) throw new Error(`No palettes defined for theme with palette expected: ${themeName}`);
        let palette = this.state.palettes[paletteName || ""], attemptParentName = `${parentName}_${paletteName}`;
        for (; !palette && attemptParentName; ) attemptParentName in this.state.palettes ? (palette = this.state.palettes[attemptParentName], paletteName = attemptParentName) : attemptParentName = attemptParentName.split("_").slice(0, -1).join("_");
        if (!palette) {
          const msg = process.env.NODE_ENV !== "production" ? `: ${themeName}: ${paletteName}
          Definition: ${JSON.stringify(themeDefinition)}
          Parent: ${JSON.stringify(parentDefinition)}
          Potential: (${Object.keys(this.state.palettes).join(", ")})` : "";
          throw new Error(`No palette for theme${msg}`);
        }
        const template = this.state.templates?.[templateName] ?? // fall back to finding the scheme specific on if it exists
        this.state.templates?.[`${nameParts[0]}_${templateName}`];
        if (!template) throw new Error(`No template for theme ${themeName}: ${templateName} in templates:
- ${Object.keys(this.state.templates || {}).join(`
 - `)}`);
        out[themeName] = createThemeWithPalettes(this.state.palettes, paletteName, template, options, themeName, true);
      }
    }
    for (const {
      mask,
      themeName,
      parentName
    } of maskedThemes) {
      const parent = out[parentName];
      if (!parent) continue;
      const {
        mask: maskName,
        ...options
      } = mask;
      let maskFunction = this.state.masks?.[maskName];
      if (!maskFunction) throw new Error(`No mask ${maskName}`);
      const parentTheme = this.state.themes[parentName];
      if (parentTheme && "childOptions" in parentTheme) {
        const {
          mask: mask2,
          ...childOpts
        } = parentTheme.childOptions;
        mask2 && (maskFunction = this.state.masks?.[mask2]), Object.assign(options, childOpts);
      }
      out[themeName] = applyMask(parent, maskFunction, options, parentName, themeName);
    }
    return out;
  }
};
function createThemeBuilder() {
  return new ThemeBuilder({});
}
__name(createThemeBuilder, "createThemeBuilder");

// node_modules/color2k/dist/index.exports.import.es.mjs
function guard(low, high, value) {
  return Math.min(Math.max(low, value), high);
}
__name(guard, "guard");
var ColorError = class extends Error {
  static {
    __name(this, "ColorError");
  }
  constructor(color) {
    super(`Failed to parse color: "${color}"`);
  }
};
var ColorError$1 = ColorError;
function parseToRgba(color) {
  if (typeof color !== "string") throw new ColorError$1(color);
  if (color.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let normalizedColor = color.trim();
  normalizedColor = namedColorRegex.test(color) ? nameToHex(color) : color;
  const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
  if (reducedHexMatch) {
    const arr = Array.from(reducedHexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(r(x, 2), 16)), parseInt(r(arr[3] || "f", 2), 16) / 255];
  }
  const hexMatch = hexRegex.exec(normalizedColor);
  if (hexMatch) {
    const arr = Array.from(hexMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 16)), parseInt(arr[3] || "ff", 16) / 255];
  }
  const rgbaMatch = rgbaRegex.exec(normalizedColor);
  if (rgbaMatch) {
    const arr = Array.from(rgbaMatch).slice(1);
    return [...arr.slice(0, 3).map((x) => parseInt(x, 10)), parseFloat(arr[3] || "1")];
  }
  const hslaMatch = hslaRegex.exec(normalizedColor);
  if (hslaMatch) {
    const [h, s, l, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
    if (guard(0, 100, s) !== s) throw new ColorError$1(color);
    if (guard(0, 100, l) !== l) throw new ColorError$1(color);
    return [...hslToRgb(h, s, l), Number.isNaN(a) ? 1 : a];
  }
  throw new ColorError$1(color);
}
__name(parseToRgba, "parseToRgba");
function hash(str) {
  let hash2 = 5381;
  let i = str.length;
  while (i) {
    hash2 = hash2 * 33 ^ str.charCodeAt(--i);
  }
  return (hash2 >>> 0) % 2341;
}
__name(hash, "hash");
var colorToInt = /* @__PURE__ */ __name((x) => parseInt(x.replace(/_/g, ""), 36), "colorToInt");
var compressedColorMap = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((acc, next) => {
  const key = colorToInt(next.substring(0, 3));
  const hex = colorToInt(next.substring(3)).toString(16);
  let prefix = "";
  for (let i = 0; i < 6 - hex.length; i++) {
    prefix += "0";
  }
  acc[key] = `${prefix}${hex}`;
  return acc;
}, {});
function nameToHex(color) {
  const normalizedColorName = color.toLowerCase().trim();
  const result = compressedColorMap[hash(normalizedColorName)];
  if (!result) throw new ColorError$1(color);
  return `#${result}`;
}
__name(nameToHex, "nameToHex");
var r = /* @__PURE__ */ __name((str, amount) => Array.from(Array(amount)).map(() => str).join(""), "r");
var reducedHexRegex = new RegExp(`^#${r("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
var hexRegex = new RegExp(`^#${r("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
var rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
var hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
var namedColorRegex = /^[a-z]+$/i;
var roundColor = /* @__PURE__ */ __name((color) => {
  return Math.round(color * 255);
}, "roundColor");
var hslToRgb = /* @__PURE__ */ __name((hue, saturation, lightness) => {
  let l = lightness / 100;
  if (saturation === 0) {
    return [l, l, l].map(roundColor);
  }
  const huePrime = (hue % 360 + 360) % 360 / 60;
  const chroma = (1 - Math.abs(2 * l - 1)) * (saturation / 100);
  const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  let red3 = 0;
  let green3 = 0;
  let blue = 0;
  if (huePrime >= 0 && huePrime < 1) {
    red3 = chroma;
    green3 = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red3 = secondComponent;
    green3 = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green3 = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green3 = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red3 = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red3 = chroma;
    blue = secondComponent;
  }
  const lightnessModification = l - chroma / 2;
  const finalRed = red3 + lightnessModification;
  const finalGreen = green3 + lightnessModification;
  const finalBlue = blue + lightnessModification;
  return [finalRed, finalGreen, finalBlue].map(roundColor);
}, "hslToRgb");
function parseToHsla(color) {
  const [red3, green3, blue, alpha] = parseToRgba(color).map((value, index) => (
    // 3rd index is alpha channel which is already normalized
    index === 3 ? value : value / 255
  ));
  const max = Math.max(red3, green3, blue);
  const min = Math.min(red3, green3, blue);
  const lightness = (max + min) / 2;
  if (max === min) return [0, 0, lightness, alpha];
  const delta = max - min;
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  const hue = 60 * (red3 === max ? (green3 - blue) / delta + (green3 < blue ? 6 : 0) : green3 === max ? (blue - red3) / delta + 2 : (red3 - green3) / delta + 4);
  return [hue, saturation, lightness, alpha];
}
__name(parseToHsla, "parseToHsla");
function hsla(hue, saturation, lightness, alpha) {
  return `hsla(${(hue % 360).toFixed()}, ${guard(0, 100, saturation * 100).toFixed()}%, ${guard(0, 100, lightness * 100).toFixed()}%, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
__name(hsla, "hsla");

// node_modules/@tamagui/theme-builder/dist/esm/defaultComponentThemes.mjs
var defaultComponentThemes = {
  ListItem: {
    template: "surface1"
  },
  SelectTrigger: {
    template: "surface1"
  },
  Card: {
    template: "surface1"
  },
  Button: {
    template: "surface3"
  },
  Checkbox: {
    template: "surface2"
  },
  Switch: {
    template: "surface2"
  },
  SwitchThumb: {
    template: "inverse"
  },
  TooltipContent: {
    template: "surface2"
  },
  Progress: {
    template: "surface1"
  },
  RadioGroupItem: {
    template: "surface2"
  },
  TooltipArrow: {
    template: "surface1"
  },
  SliderTrackActive: {
    template: "surface3"
  },
  SliderTrack: {
    template: "surface1"
  },
  SliderThumb: {
    template: "inverse"
  },
  Tooltip: {
    template: "inverse"
  },
  ProgressIndicator: {
    template: "inverse"
  },
  Input: {
    template: "surface1"
  },
  TextArea: {
    template: "surface1"
  }
};

// node_modules/@tamagui/theme-builder/dist/esm/helpers.mjs
var objectKeys = /* @__PURE__ */ __name((obj) => Object.keys(obj), "objectKeys");
function objectFromEntries2(arr) {
  return Object.fromEntries(arr);
}
__name(objectFromEntries2, "objectFromEntries");

// node_modules/@tamagui/theme-builder/dist/esm/defaultTemplates.mjs
var getTemplates = /* @__PURE__ */ __name(() => {
  const lightTemplates = getBaseTemplates("light"), darkTemplates = getBaseTemplates("dark");
  return {
    ...objectFromEntries2(objectKeys(lightTemplates).map((name) => [`light_${name}`, lightTemplates[name]])),
    ...objectFromEntries2(objectKeys(darkTemplates).map((name) => [`dark_${name}`, darkTemplates[name]]))
  };
}, "getTemplates");
var getBaseTemplates = /* @__PURE__ */ __name((scheme) => {
  const isLight = scheme === "light", bgIndex = 6, lighten = isLight ? -1 : 1, darken = -lighten, borderColor = bgIndex + 3, baseColors = {
    color: -bgIndex,
    colorHover: -bgIndex - 1,
    colorPress: -bgIndex,
    colorFocus: -bgIndex - 1,
    placeholderColor: -bgIndex - 3,
    outlineColor: -2
  }, base = {
    accentBackground: 0,
    accentColor: -0,
    background0: 1,
    background02: 2,
    background04: 3,
    background06: 4,
    background08: 5,
    color1: bgIndex,
    color2: bgIndex + 1,
    color3: bgIndex + 2,
    color4: bgIndex + 3,
    color5: bgIndex + 4,
    color6: bgIndex + 5,
    color7: bgIndex + 6,
    color8: bgIndex + 7,
    color9: bgIndex + 8,
    color10: bgIndex + 9,
    color11: bgIndex + 10,
    color12: bgIndex + 11,
    color0: -1,
    color02: -2,
    color04: -3,
    color06: -4,
    color08: -5,
    // the background, color, etc keys here work like generics - they make it so you
    // can publish components for others to use without mandating a specific color scale
    // the @tamagui/button Button component looks for `$background`, so you set the
    // dark_red_Button theme to have a stronger background than the dark_red theme.
    background: bgIndex,
    backgroundHover: bgIndex + lighten,
    // always lighten on hover no matter the scheme
    backgroundPress: bgIndex + darken,
    // always darken on press no matter the theme
    backgroundFocus: bgIndex + darken,
    borderColor,
    borderColorHover: borderColor + lighten,
    borderColorPress: borderColor + darken,
    borderColorFocus: borderColor,
    ...baseColors,
    colorTransparent: -1
  }, surface1 = {
    ...baseColors,
    background: base.background + 1,
    backgroundHover: base.backgroundHover + 1,
    backgroundPress: base.backgroundPress + 1,
    backgroundFocus: base.backgroundFocus + 1,
    borderColor: base.borderColor + 1,
    borderColorHover: base.borderColorHover + 1,
    borderColorFocus: base.borderColorFocus + 1,
    borderColorPress: base.borderColorPress + 1
  }, surface2 = {
    ...baseColors,
    background: base.background + 2,
    backgroundHover: base.backgroundHover + 2,
    backgroundPress: base.backgroundPress + 2,
    backgroundFocus: base.backgroundFocus + 2,
    borderColor: base.borderColor + 2,
    borderColorHover: base.borderColorHover + 2,
    borderColorFocus: base.borderColorFocus + 2,
    borderColorPress: base.borderColorPress + 2
  }, surface3 = {
    ...baseColors,
    background: base.background + 3,
    backgroundHover: base.backgroundHover + 3,
    backgroundPress: base.backgroundPress + 3,
    backgroundFocus: base.backgroundFocus + 3,
    borderColor: base.borderColor + 3,
    borderColorHover: base.borderColorHover + 3,
    borderColorFocus: base.borderColorFocus + 3,
    borderColorPress: base.borderColorPress + 3
  }, alt1 = {
    color: base.color - 1,
    colorHover: base.colorHover - 1,
    colorPress: base.colorPress - 1,
    colorFocus: base.colorFocus - 1
  }, alt2 = {
    color: base.color - 2,
    colorHover: base.colorHover - 2,
    colorPress: base.colorPress - 2,
    colorFocus: base.colorFocus - 2
  }, inverse = Object.fromEntries(Object.entries(base).map(([key, index]) => [key, -index]));
  return {
    base,
    surface1,
    surface2,
    surface3,
    alt1,
    alt2,
    inverse
  };
}, "getBaseTemplates");
var defaultTemplates = getTemplates();

// node_modules/@tamagui/theme-builder/dist/esm/getThemeSuitePalettes.mjs
var paletteSize = 12;
var PALETTE_BACKGROUND_OFFSET = 6;
var generateColorPalette = /* @__PURE__ */ __name(({
  palette: buildPalette,
  scheme
}) => {
  if (!buildPalette) return [];
  const {
    anchors
  } = buildPalette;
  let palette = [];
  const add = /* @__PURE__ */ __name((h, s, l) => {
    palette.push(hsla(h, s, l, 1));
  }, "add"), numAnchors = Object.keys(anchors).length;
  for (const [anchorIndex, anchor] of anchors.entries()) {
    const [h, s, l] = [anchor.hue[scheme], anchor.sat[scheme], anchor.lum[scheme]];
    if (anchorIndex !== 0) {
      const lastAnchor = anchors[anchorIndex - 1], steps = anchor.index - lastAnchor.index, lastHue = lastAnchor.hue[scheme], lastSat = lastAnchor.sat[scheme], lastLum = lastAnchor.lum[scheme], stepHue = (lastHue - h) / steps, stepSat = (lastSat - s) / steps, stepLum = (lastLum - l) / steps;
      for (let step = lastAnchor.index + 1; step < anchor.index; step++) {
        const str = anchor.index - step;
        add(h + stepHue * str, s + stepSat * str, l + stepLum * str);
      }
    }
    if (add(h, s, l), anchorIndex === numAnchors - 1 && palette.length < paletteSize) for (let step = anchor.index + 1; step < paletteSize; step++) add(h, s, l);
  }
  const background = palette[0], foreground = palette[palette.length - 1], transparentValues = [background, foreground].map((color) => {
    const [h, s, l] = parseToHsla(color);
    return [hsla(h, s, l, 0), hsla(h, s, l, 0.2), hsla(h, s, l, 0.4), hsla(h, s, l, 0.6), hsla(h, s, l, 0.8)];
  }), reverseForeground = [...transparentValues[1]].reverse();
  return palette = [...transparentValues[0], ...palette, ...reverseForeground], palette;
}, "generateColorPalette");
function getThemeSuitePalettes(palette) {
  return {
    light: generateColorPalette({
      palette,
      scheme: "light"
    }),
    dark: generateColorPalette({
      palette,
      scheme: "dark"
    })
  };
}
__name(getThemeSuitePalettes, "getThemeSuitePalettes");

// node_modules/@tamagui/theme-builder/dist/esm/createThemes.mjs
function createThemes(props) {
  const {
    accent,
    childrenThemes,
    grandChildrenThemes,
    templates = defaultTemplates,
    componentThemes
  } = props, builder = createSimpleThemeBuilder({
    extra: props.base.extra,
    componentThemes,
    palettes: createPalettes(getThemesPalettes(props)),
    templates,
    accentTheme: !!accent,
    childrenThemes: normalizeSubThemes(childrenThemes),
    grandChildrenThemes: grandChildrenThemes ? normalizeSubThemes(grandChildrenThemes) : void 0
  });
  return lastBuilder = builder.themeBuilder, builder.themes;
}
__name(createThemes, "createThemes");
var lastBuilder = null;
function normalizeSubThemes(defs) {
  return Object.fromEntries(Object.entries(defs || {}).map(([name, value]) => [name, {
    palette: name,
    template: value.template || "base"
  }]));
}
__name(normalizeSubThemes, "normalizeSubThemes");
var defaultPalettes = createPalettes(getThemesPalettes({
  base: {
    palette: ["#fff", "#000"]
  },
  accent: {
    palette: ["#ff0000", "#ff9999"]
  }
}));
function createSimpleThemeBuilder(props) {
  const {
    extra,
    childrenThemes = null,
    grandChildrenThemes = null,
    templates = defaultTemplates,
    palettes = defaultPalettes,
    accentTheme,
    componentThemes = templates === defaultTemplates ? defaultComponentThemes : void 0
  } = props;
  let themeBuilder = createThemeBuilder().addPalettes(palettes).addTemplates(templates).addThemes({
    light: {
      template: "base",
      palette: "light",
      nonInheritedValues: {
        ...extra?.light,
        ...accentTheme && palettes.light_accent && {
          accent1: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 0],
          accent2: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 1],
          accent3: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 2],
          accent4: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 3],
          accent5: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 4],
          accent6: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 5],
          accent7: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 6],
          accent8: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 7],
          accent9: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 8],
          accent10: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 9],
          accent11: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 10],
          accent12: palettes.light_accent[PALETTE_BACKGROUND_OFFSET + 11]
        }
      }
    },
    dark: {
      template: "base",
      palette: "dark",
      nonInheritedValues: {
        ...extra?.dark,
        ...accentTheme && palettes.dark_accent && {
          accent1: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 0],
          accent2: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 1],
          accent3: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 2],
          accent4: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 3],
          accent5: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 4],
          accent6: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 5],
          accent7: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 6],
          accent8: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 7],
          accent9: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 8],
          accent10: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 9],
          accent11: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 10],
          accent12: palettes.dark_accent[PALETTE_BACKGROUND_OFFSET + 11]
        }
      }
    }
  });
  return palettes.light_accent && (themeBuilder = themeBuilder.addChildThemes({
    accent: [{
      parent: "light",
      template: "base",
      palette: "light_accent"
    }, {
      parent: "dark",
      template: "base",
      palette: "dark_accent"
    }]
  })), childrenThemes && (themeBuilder = themeBuilder.addChildThemes(childrenThemes, {
    avoidNestingWithin: ["accent"]
  })), grandChildrenThemes && (themeBuilder = themeBuilder.addChildThemes(grandChildrenThemes, {
    avoidNestingWithin: ["accent"]
  })), componentThemes && (themeBuilder = themeBuilder.addComponentThemes(getComponentThemes(componentThemes), {
    avoidNestingWithin: [
      // ...Object.keys(childrenThemes || {}),
      ...Object.keys(grandChildrenThemes || {})
    ]
  })), {
    themeBuilder,
    themes: themeBuilder.build()
  };
}
__name(createSimpleThemeBuilder, "createSimpleThemeBuilder");
function getSchemePalette(colors2) {
  return {
    light: colors2,
    dark: [...colors2].reverse()
  };
}
__name(getSchemePalette, "getSchemePalette");
function getAnchors(palette) {
  const numItems = palette.light.length;
  return palette.light.map((lcolor, index) => {
    const dcolor = palette.dark[index], [lhue, lsat, llum] = parseToHsla(lcolor), [dhue, dsat, dlum] = parseToHsla(dcolor);
    return {
      index: spreadIndex(11, numItems, index),
      hue: {
        light: lhue,
        dark: dhue
      },
      sat: {
        light: lsat,
        dark: dsat
      },
      lum: {
        light: llum,
        dark: dlum
      }
    };
  });
}
__name(getAnchors, "getAnchors");
function spreadIndex(maxIndex, numItems, index) {
  return Math.round(index / (numItems - 1) * maxIndex);
}
__name(spreadIndex, "spreadIndex");
function coerceSimplePaletteToSchemePalette(def) {
  return Array.isArray(def) ? getSchemePalette(def) : def;
}
__name(coerceSimplePaletteToSchemePalette, "coerceSimplePaletteToSchemePalette");
function getThemesPalettes(props) {
  const base = coerceSimplePaletteToSchemePalette(props.base.palette), accent = props.accent ? coerceSimplePaletteToSchemePalette(props.accent.palette) : null, baseAnchors = getAnchors(base);
  function getSubThemesPalettes(defs) {
    return Object.fromEntries(Object.entries(defs).map(([key, value]) => [key, {
      name: key,
      anchors: value.palette ? getAnchors(coerceSimplePaletteToSchemePalette(value.palette)) : baseAnchors
    }]));
  }
  __name(getSubThemesPalettes, "getSubThemesPalettes");
  return {
    base: {
      name: "base",
      anchors: baseAnchors
    },
    ...accent && {
      accent: {
        name: "accent",
        anchors: getAnchors(accent)
      }
    },
    ...props.childrenThemes && getSubThemesPalettes(props.childrenThemes),
    ...props.grandChildrenThemes && getSubThemesPalettes(props.grandChildrenThemes)
  };
}
__name(getThemesPalettes, "getThemesPalettes");
var getComponentThemes = /* @__PURE__ */ __name((components) => Object.fromEntries(Object.entries(components).map(([componentName, {
  template
}]) => [componentName, {
  parent: "",
  template: template || "base"
}])), "getComponentThemes");
function createPalettes(palettes) {
  const accentPalettes = palettes.accent ? getThemeSuitePalettes(palettes.accent) : null, basePalettes = getThemeSuitePalettes(palettes.base);
  return Object.fromEntries(Object.entries(palettes).flatMap(([name, palette]) => {
    const palettes2 = getThemeSuitePalettes(palette), oppositePalettes = name.startsWith("accent") ? basePalettes : accentPalettes || basePalettes;
    if (!oppositePalettes) return [];
    const oppositeLight = oppositePalettes.light, oppositeDark = oppositePalettes.dark, bgOffset = 7;
    return [[name === "base" ? "light" : `light_${name}`, [oppositeLight[bgOffset], ...palettes2.light, oppositeLight[oppositeLight.length - bgOffset - 1]]], [name === "base" ? "dark" : `dark_${name}`, [oppositeDark[oppositeDark.length - bgOffset - 1], ...palettes2.dark, oppositeDark[bgOffset]]]];
  }));
}
__name(createPalettes, "createPalettes");

// node_modules/@tamagui/theme-builder/dist/esm/defaultTemplatesStronger.mjs
var getTemplates2 = /* @__PURE__ */ __name(() => {
  const lightTemplates = getBaseTemplates2("light"), darkTemplates = getBaseTemplates2("dark");
  return {
    ...objectFromEntries2(objectKeys(lightTemplates).map((name) => [`light_${name}`, lightTemplates[name]])),
    ...objectFromEntries2(objectKeys(darkTemplates).map((name) => [`dark_${name}`, darkTemplates[name]]))
  };
}, "getTemplates");
var getBaseTemplates2 = /* @__PURE__ */ __name((scheme) => {
  const isLight = scheme === "light", bgIndex = 6, lighten = isLight ? -1 : 1, darken = -lighten, borderColor = bgIndex + 3, baseColors = {
    color: -bgIndex,
    colorHover: -bgIndex - 1,
    colorPress: -bgIndex,
    colorFocus: -bgIndex - 1,
    placeholderColor: -bgIndex - 3,
    outlineColor: -2
  }, base = {
    accentBackground: 0,
    accentColor: -0,
    background0: 1,
    background02: 2,
    background04: 3,
    background06: 4,
    background08: 5,
    color1: bgIndex,
    color2: bgIndex + 1,
    color3: bgIndex + 2,
    color4: bgIndex + 3,
    color5: bgIndex + 4,
    color6: bgIndex + 5,
    color7: bgIndex + 6,
    color8: bgIndex + 7,
    color9: bgIndex + 8,
    color10: bgIndex + 9,
    color11: bgIndex + 10,
    color12: bgIndex + 11,
    color0: -1,
    color02: -2,
    color04: -3,
    color06: -4,
    color08: -5,
    // the background, color, etc keys here work like generics - they make it so you
    // can publish components for others to use without mandating a specific color scale
    // the @tamagui/button Button component looks for `$background`, so you set the
    // dark_red_Button theme to have a stronger background than the dark_red theme.
    background: bgIndex,
    backgroundHover: bgIndex + lighten,
    // always lighten on hover no matter the scheme
    backgroundPress: bgIndex + darken,
    // always darken on press no matter the theme
    backgroundFocus: bgIndex + darken,
    borderColor,
    borderColorHover: borderColor + lighten,
    borderColorPress: borderColor + darken,
    borderColorFocus: borderColor,
    ...baseColors,
    colorTransparent: -1
  }, surface1 = {
    ...baseColors,
    background: base.background + 2,
    backgroundHover: base.backgroundHover + 2,
    backgroundPress: base.backgroundPress + 2,
    backgroundFocus: base.backgroundFocus + 2,
    borderColor: base.borderColor + 2,
    borderColorHover: base.borderColorHover + 2,
    borderColorFocus: base.borderColorFocus + 2,
    borderColorPress: base.borderColorPress + 2
  }, surface2 = {
    ...baseColors,
    background: base.background + 3,
    backgroundHover: base.backgroundHover + 3,
    backgroundPress: base.backgroundPress + 3,
    backgroundFocus: base.backgroundFocus + 3,
    borderColor: base.borderColor + 3,
    borderColorHover: base.borderColorHover + 3,
    borderColorFocus: base.borderColorFocus + 3,
    borderColorPress: base.borderColorPress + 3
  }, surface3 = {
    ...baseColors,
    background: base.background + 4,
    backgroundHover: base.backgroundHover + 4,
    backgroundPress: base.backgroundPress + 4,
    backgroundFocus: base.backgroundFocus + 4,
    borderColor: base.borderColor + 4,
    borderColorHover: base.borderColorHover + 4,
    borderColorFocus: base.borderColorFocus + 4,
    borderColorPress: base.borderColorPress + 4
  }, alt1 = {
    color: base.color - 1,
    colorHover: base.colorHover - 1,
    colorPress: base.colorPress - 1,
    colorFocus: base.colorFocus - 1
  }, alt2 = {
    color: base.color - 2,
    colorHover: base.colorHover - 2,
    colorPress: base.colorPress - 2,
    colorFocus: base.colorFocus - 2
  }, inverse = Object.fromEntries(Object.entries(base).map(([key, index]) => [key, -index]));
  return {
    base,
    surface1,
    surface2,
    surface3,
    alt1,
    alt2,
    inverse
  };
}, "getBaseTemplates");
var defaultTemplatesStronger = getTemplates2();

// node_modules/@tamagui/theme-builder/dist/esm/defaultTemplatesStrongest.mjs
var getTemplates3 = /* @__PURE__ */ __name(() => {
  const lightTemplates = getBaseTemplates3("light"), darkTemplates = getBaseTemplates3("dark");
  return {
    ...objectFromEntries2(objectKeys(lightTemplates).map((name) => [`light_${name}`, lightTemplates[name]])),
    ...objectFromEntries2(objectKeys(darkTemplates).map((name) => [`dark_${name}`, darkTemplates[name]]))
  };
}, "getTemplates");
var getBaseTemplates3 = /* @__PURE__ */ __name((scheme) => {
  const isLight = scheme === "light", bgIndex = 6, lighten = isLight ? -1 : 1, darken = -lighten, borderColor = bgIndex + 3, baseColors = {
    color: -bgIndex,
    colorHover: -bgIndex - 1,
    colorPress: -bgIndex,
    colorFocus: -bgIndex - 1,
    placeholderColor: -bgIndex - 3,
    outlineColor: -2
  }, base = {
    accentBackground: 0,
    accentColor: -0,
    background0: 1,
    background02: 2,
    background04: 3,
    background06: 4,
    background08: 5,
    color1: bgIndex,
    color2: bgIndex + 1,
    color3: bgIndex + 2,
    color4: bgIndex + 3,
    color5: bgIndex + 4,
    color6: bgIndex + 5,
    color7: bgIndex + 6,
    color8: bgIndex + 7,
    color9: bgIndex + 8,
    color10: bgIndex + 9,
    color11: bgIndex + 10,
    color12: bgIndex + 11,
    color0: -1,
    color02: -2,
    color04: -3,
    color06: -4,
    color08: -5,
    // the background, color, etc keys here work like generics - they make it so you
    // can publish components for others to use without mandating a specific color scale
    // the @tamagui/button Button component looks for `$background`, so you set the
    // dark_red_Button theme to have a stronger background than the dark_red theme.
    background: bgIndex,
    backgroundHover: bgIndex + lighten,
    // always lighten on hover no matter the scheme
    backgroundPress: bgIndex + darken,
    // always darken on press no matter the theme
    backgroundFocus: bgIndex + darken,
    borderColor,
    borderColorHover: borderColor + lighten,
    borderColorPress: borderColor + darken,
    borderColorFocus: borderColor,
    ...baseColors,
    colorTransparent: -1
  }, surface1 = {
    ...baseColors,
    background: base.background + 3,
    backgroundHover: base.backgroundHover + 3,
    backgroundPress: base.backgroundPress + 3,
    backgroundFocus: base.backgroundFocus + 3,
    borderColor: base.borderColor + 3,
    borderColorHover: base.borderColorHover + 3,
    borderColorFocus: base.borderColorFocus + 3,
    borderColorPress: base.borderColorPress + 3
  }, surface2 = {
    ...baseColors,
    background: base.background + 4,
    backgroundHover: base.backgroundHover + 4,
    backgroundPress: base.backgroundPress + 4,
    backgroundFocus: base.backgroundFocus + 4,
    borderColor: base.borderColor + 4,
    borderColorHover: base.borderColorHover + 4,
    borderColorFocus: base.borderColorFocus + 4,
    borderColorPress: base.borderColorPress + 4
  }, surface3 = {
    ...baseColors,
    background: base.background + 5,
    backgroundHover: base.backgroundHover + 5,
    backgroundPress: base.backgroundPress + 5,
    backgroundFocus: base.backgroundFocus + 5,
    borderColor: base.borderColor + 5,
    borderColorHover: base.borderColorHover + 5,
    borderColorFocus: base.borderColorFocus + 5,
    borderColorPress: base.borderColorPress + 5
  }, alt1 = {
    color: base.color - 1,
    colorHover: base.colorHover - 1,
    colorPress: base.colorPress - 1,
    colorFocus: base.colorFocus - 1
  }, alt2 = {
    color: base.color - 2,
    colorHover: base.colorHover - 2,
    colorPress: base.colorPress - 2,
    colorFocus: base.colorFocus - 2
  }, inverse = Object.fromEntries(Object.entries(base).map(([key, index]) => [key, -index]));
  return {
    base,
    surface1,
    surface2,
    surface3,
    alt1,
    alt2,
    inverse
  };
}, "getBaseTemplates");
var defaultTemplatesStrongest = getTemplates3();

// node_modules/@tamagui/theme-builder/dist/esm/masks.mjs
var masks = {
  identity: createIdentityMask(),
  soften: createSoftenMask(),
  soften2: createSoftenMask({
    strength: 2
  }),
  soften3: createSoftenMask({
    strength: 3
  }),
  strengthen: createStrengthenMask(),
  inverse: createInverseMask(),
  inverseSoften: combineMasks(createInverseMask(), createSoftenMask({
    strength: 2
  })),
  inverseSoften2: combineMasks(createInverseMask(), createSoftenMask({
    strength: 3
  })),
  inverseSoften3: combineMasks(createInverseMask(), createSoftenMask({
    strength: 4
  })),
  inverseStrengthen2: combineMasks(createInverseMask(), createStrengthenMask({
    strength: 2
  })),
  strengthenButSoftenBorder: createMask((template, options) => {
    const stronger = createStrengthenMask().mask(template, options), softer = createSoftenMask().mask(template, options);
    return {
      ...stronger,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  }),
  soften2Border1: createMask((template, options) => {
    const softer2 = createSoftenMask({
      strength: 2
    }).mask(template, options), softer1 = createSoftenMask({
      strength: 1
    }).mask(template, options);
    return {
      ...softer2,
      borderColor: softer1.borderColor,
      borderColorHover: softer1.borderColorHover,
      borderColorPress: softer1.borderColorPress,
      borderColorFocus: softer1.borderColorFocus
    };
  }),
  soften3FlatBorder: createMask((template, options) => {
    const borderMask = createSoftenMask({
      strength: 2
    }).mask(template, options);
    return {
      ...createSoftenMask({
        strength: 3
      }).mask(template, options),
      borderColor: borderMask.borderColor,
      borderColorHover: borderMask.borderColorHover,
      borderColorPress: borderMask.borderColorPress,
      borderColorFocus: borderMask.borderColorFocus
    };
  }),
  softenBorder: createMask((template, options) => {
    const plain = skipMask.mask(template, options), softer = createSoftenMask().mask(template, options);
    return {
      ...plain,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  }),
  softenBorder2: createMask((template, options) => {
    const plain = skipMask.mask(template, options), softer = createSoftenMask({
      strength: 2
    }).mask(template, options);
    return {
      ...plain,
      borderColor: softer.borderColor,
      borderColorHover: softer.borderColorHover,
      borderColorPress: softer.borderColorPress,
      borderColorFocus: softer.borderColorFocus
    };
  })
};

// node_modules/@tamagui/themes/dist/esm/generated-v4.mjs
function t(a) {
  let res = {};
  for (const [ki, vi] of a) res[ks[ki]] = colors[vi];
  return res;
}
__name(t, "t");
var colors = ["hsla(0, 0%, 10%, 1)", "hsla(0, 0%, 38%, 1)", "hsla(0, 0%, 100%, 0)", "hsla(0, 0%, 100%, 0.2)", "hsla(0, 0%, 100%, 0.4)", "hsla(0, 0%, 100%, 0.6)", "hsla(0, 0%, 100%, 0.8)", "hsla(0, 0%, 100%, 1)", "hsla(0, 0%, 95%, 1)", "hsla(0, 0%, 93%, 1)", "hsla(0, 0%, 91%, 1)", "hsla(0, 0%, 88%, 1)", "hsla(0, 0%, 85%, 1)", "hsla(0, 0%, 82%, 1)", "hsla(0, 0%, 76%, 1)", "hsla(0, 0%, 56%, 1)", "hsla(0, 0%, 50%, 1)", "hsla(0, 0%, 42%, 1)", "hsla(0, 0%, 9%, 1)", "hsla(0, 0%, 9%, 0)", "hsla(0, 0%, 9%, 0.2)", "hsla(0, 0%, 9%, 0.4)", "hsla(0, 0%, 9%, 0.6)", "hsla(0, 0%, 9%, 0.8)", "hsl(206, 100%, 99.2%)", "hsl(210, 100%, 98.0%)", "hsl(209, 100%, 96.5%)", "hsl(210, 98.8%, 94.0%)", "hsl(209, 95.0%, 90.1%)", "hsl(209, 81.2%, 84.5%)", "hsl(208, 77.5%, 76.9%)", "hsl(206, 81.9%, 65.3%)", "hsl(206, 100%, 50.0%)", "hsl(208, 100%, 47.3%)", "hsl(211, 100%, 43.2%)", "hsl(211, 100%, 15.0%)", "hsl(136, 50.0%, 98.9%)", "hsl(138, 62.5%, 96.9%)", "hsl(139, 55.2%, 94.5%)", "hsl(140, 48.7%, 91.0%)", "hsl(141, 43.7%, 86.0%)", "hsl(143, 40.3%, 79.0%)", "hsl(146, 38.5%, 69.0%)", "hsl(151, 40.2%, 54.1%)", "hsl(151, 55.0%, 41.5%)", "hsl(152, 57.5%, 37.6%)", "hsl(153, 67.0%, 28.5%)", "hsl(155, 40.0%, 14.0%)", "hsl(359, 100%, 99.4%)", "hsl(359, 100%, 98.6%)", "hsl(360, 100%, 96.8%)", "hsl(360, 97.9%, 94.8%)", "hsl(360, 90.2%, 91.9%)", "hsl(360, 81.7%, 87.8%)", "hsl(359, 74.2%, 81.7%)", "hsl(359, 69.5%, 74.3%)", "hsl(358, 75.0%, 59.0%)", "hsl(358, 69.4%, 55.2%)", "hsl(358, 65.0%, 48.7%)", "hsl(354, 50.0%, 14.6%)", "hsl(60, 54.0%, 98.5%)", "hsl(52, 100%, 95.5%)", "hsl(55, 100%, 90.9%)", "hsl(54, 100%, 86.6%)", "hsl(52, 97.9%, 82.0%)", "hsl(50, 89.4%, 76.1%)", "hsl(47, 80.4%, 68.0%)", "hsl(48, 100%, 46.1%)", "hsl(53, 92.0%, 50.0%)", "hsl(50, 100%, 48.5%)", "hsl(42, 100%, 29.0%)", "hsl(40, 55.0%, 13.5%)", "rgba(0,0,0,0.04)", "rgba(0,0,0,0.08)", "rgba(0,0,0,0.16)", "rgba(0,0,0,0.24)", "rgba(0,0,0,0.32)", "rgba(0,0,0,0.4)", "#050505", "#151515", "#191919", "#232323", "#282828", "#323232", "#424242", "#494949", "#545454", "#626262", "#a5a5a5", "#fff", "#f2f2f2", "hsl(0, 0%, 93%)", "hsl(0, 0%, 91%)", "hsl(0, 0%, 88%)", "hsl(0, 0%, 85%)", "hsl(0, 0%, 82%)", "hsl(0, 0%, 76%)", "hsl(0, 0%, 56%)", "hsl(0, 0%, 50%)", "hsl(0, 0%, 42%)", "hsl(0, 0%, 9%)", "hsla(0, 0%, 2%, 1)", "hsla(0, 0%, 8%, 1)", "hsla(0, 0%, 14%, 1)", "hsla(0, 0%, 16%, 1)", "hsla(0, 0%, 20%, 1)", "hsla(0, 0%, 26%, 1)", "hsla(0, 0%, 29%, 1)", "hsla(0, 0%, 33%, 1)", "hsla(0, 0%, 65%, 1)", "hsla(0, 0%, 2%, 0)", "hsla(0, 0%, 2%, 0.2)", "hsla(0, 0%, 2%, 0.4)", "hsla(0, 0%, 2%, 0.6)", "hsla(0, 0%, 2%, 0.8)", "hsl(212, 35.0%, 9.2%)", "hsl(216, 50.0%, 11.8%)", "hsl(214, 59.4%, 15.3%)", "hsl(214, 65.8%, 17.9%)", "hsl(213, 71.2%, 20.2%)", "hsl(212, 77.4%, 23.1%)", "hsl(211, 85.1%, 27.4%)", "hsl(211, 89.7%, 34.1%)", "hsl(209, 100%, 60.6%)", "hsl(210, 100%, 66.1%)", "hsl(206, 98.0%, 95.8%)", "hsl(146, 30.0%, 7.4%)", "hsl(155, 44.2%, 8.4%)", "hsl(155, 46.7%, 10.9%)", "hsl(154, 48.4%, 12.9%)", "hsl(154, 49.7%, 14.9%)", "hsl(154, 50.9%, 17.6%)", "hsl(153, 51.8%, 21.8%)", "hsl(151, 51.7%, 28.4%)", "hsl(151, 49.3%, 46.5%)", "hsl(151, 50.0%, 53.2%)", "hsl(137, 72.0%, 94.0%)", "hsl(353, 23.0%, 9.8%)", "hsl(357, 34.4%, 12.0%)", "hsl(356, 43.4%, 16.4%)", "hsl(356, 47.6%, 19.2%)", "hsl(356, 51.1%, 21.9%)", "hsl(356, 55.2%, 25.9%)", "hsl(357, 60.2%, 31.8%)", "hsl(358, 65.0%, 40.4%)", "hsl(358, 85.3%, 64.0%)", "hsl(358, 100%, 69.5%)", "hsl(351, 89.0%, 96.0%)", "hsl(45, 100%, 5.5%)", "hsl(46, 100%, 6.7%)", "hsl(45, 100%, 8.7%)", "hsl(45, 100%, 10.4%)", "hsl(47, 100%, 12.1%)", "hsl(49, 100%, 14.3%)", "hsl(49, 90.3%, 18.4%)", "hsl(50, 100%, 22.0%)", "hsl(54, 100%, 68.0%)", "hsl(48, 100%, 47.0%)", "hsl(53, 100%, 91.0%)", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.5)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.7)", "hsla(216, 100%, 99%, 0)", "hsla(216, 100%, 99%, 0.2)", "hsla(216, 100%, 99%, 0.4)", "hsla(216, 100%, 99%, 0.6)", "hsla(216, 100%, 99%, 0.8)", "hsla(210, 100%, 99%, 1)", "hsla(210, 100%, 98%, 1)", "hsla(210, 100%, 96%, 1)", "hsla(210, 100%, 94%, 1)", "hsla(209, 96%, 90%, 1)", "hsla(209, 82%, 85%, 1)", "hsla(208, 78%, 77%, 1)", "hsla(206, 82%, 65%, 1)", "hsla(206, 100%, 50%, 1)", "hsla(208, 100%, 47%, 1)", "hsla(211, 100%, 43%, 1)", "hsla(211, 100%, 15%, 1)", "hsla(211, 100%, 15%, 0)", "hsla(211, 100%, 15%, 0.2)", "hsla(211, 100%, 15%, 0.4)", "hsla(211, 100%, 15%, 0.6)", "hsla(211, 100%, 15%, 0.8)", "hsla(0, 100%, 99%, 0)", "hsla(0, 100%, 99%, 0.2)", "hsla(0, 100%, 99%, 0.4)", "hsla(0, 100%, 99%, 0.6)", "hsla(0, 100%, 99%, 0.8)", "hsla(0, 100%, 99%, 1)", "hsla(0, 100%, 97%, 1)", "hsla(0, 100%, 95%, 1)", "hsla(0, 90%, 92%, 1)", "hsla(0, 81%, 88%, 1)", "hsla(359, 74%, 82%, 1)", "hsla(359, 69%, 74%, 1)", "hsla(358, 75%, 59%, 1)", "hsla(358, 69%, 55%, 1)", "hsla(358, 65%, 49%, 1)", "hsla(355, 49%, 15%, 1)", "hsla(355, 48%, 15%, 0)", "hsla(355, 48%, 15%, 0.2)", "hsla(355, 48%, 15%, 0.4)", "hsla(355, 48%, 15%, 0.6)", "hsla(355, 48%, 15%, 0.8)", "hsla(60, 45%, 98%, 0)", "hsla(60, 45%, 98%, 0.2)", "hsla(60, 45%, 98%, 0.4)", "hsla(60, 45%, 98%, 0.6)", "hsla(60, 45%, 98%, 0.8)", "hsla(60, 50%, 98%, 1)", "hsla(52, 100%, 95%, 1)", "hsla(55, 100%, 91%, 1)", "hsla(54, 100%, 87%, 1)", "hsla(52, 98%, 82%, 1)", "hsla(50, 90%, 76%, 1)", "hsla(47, 80%, 68%, 1)", "hsla(48, 100%, 46%, 1)", "hsla(53, 92%, 50%, 1)", "hsla(50, 100%, 48%, 1)", "hsla(42, 100%, 29%, 1)", "hsla(41, 56%, 13%, 1)", "hsla(41, 55%, 13%, 0)", "hsla(41, 55%, 13%, 0.2)", "hsla(41, 55%, 13%, 0.4)", "hsla(41, 55%, 13%, 0.6)", "hsla(41, 55%, 13%, 0.8)", "hsla(140, 60%, 99%, 0)", "hsla(140, 60%, 99%, 0.2)", "hsla(140, 60%, 99%, 0.4)", "hsla(140, 60%, 99%, 0.6)", "hsla(140, 60%, 99%, 0.8)", "hsla(140, 60%, 99%, 1)", "hsla(138, 63%, 97%, 1)", "hsla(139, 57%, 95%, 1)", "hsla(139, 48%, 91%, 1)", "hsla(141, 44%, 86%, 1)", "hsla(142, 40%, 79%, 1)", "hsla(146, 38%, 69%, 1)", "hsla(151, 40%, 54%, 1)", "hsla(151, 55%, 42%, 1)", "hsla(152, 57%, 38%, 1)", "hsla(153, 67%, 28%, 1)", "hsla(155, 41%, 14%, 1)", "hsla(155, 41%, 14%, 0)", "hsla(155, 41%, 14%, 0.2)", "hsla(155, 41%, 14%, 0.4)", "hsla(155, 41%, 14%, 0.6)", "hsla(155, 41%, 14%, 0.8)", "hsla(214, 35%, 9%, 0)", "hsla(214, 35%, 9%, 0.2)", "hsla(214, 35%, 9%, 0.4)", "hsla(214, 35%, 9%, 0.6)", "hsla(214, 35%, 9%, 0.8)", "hsla(212, 36%, 9%, 1)", "hsla(216, 50%, 12%, 1)", "hsla(214, 59%, 15%, 1)", "hsla(214, 65%, 18%, 1)", "hsla(213, 71%, 20%, 1)", "hsla(212, 78%, 23%, 1)", "hsla(211, 86%, 27%, 1)", "hsla(211, 90%, 34%, 1)", "hsla(209, 100%, 61%, 1)", "hsla(210, 100%, 66%, 1)", "hsla(206, 100%, 96%, 1)", "hsla(207, 100%, 96%, 0)", "hsla(207, 100%, 96%, 0.2)", "hsla(207, 100%, 96%, 0.4)", "hsla(207, 100%, 96%, 0.6)", "hsla(207, 100%, 96%, 0.8)", "hsla(351, 25%, 10%, 0)", "hsla(351, 25%, 10%, 0.2)", "hsla(351, 25%, 10%, 0.4)", "hsla(351, 25%, 10%, 0.6)", "hsla(351, 25%, 10%, 0.8)", "hsla(350, 24%, 10%, 1)", "hsla(357, 34%, 12%, 1)", "hsla(357, 43%, 16%, 1)", "hsla(356, 47%, 19%, 1)", "hsla(356, 51%, 22%, 1)", "hsla(357, 55%, 26%, 1)", "hsla(357, 60%, 32%, 1)", "hsla(358, 65%, 40%, 1)", "hsla(358, 86%, 64%, 1)", "hsla(358, 100%, 69%, 1)", "hsla(353, 90%, 96%, 1)", "hsla(353, 90%, 96%, 0)", "hsla(353, 90%, 96%, 0.2)", "hsla(353, 90%, 96%, 0.4)", "hsla(353, 90%, 96%, 0.6)", "hsla(353, 90%, 96%, 0.8)", "hsla(46, 100%, 5%, 0)", "hsla(46, 100%, 5%, 0.2)", "hsla(46, 100%, 5%, 0.4)", "hsla(46, 100%, 5%, 0.6)", "hsla(46, 100%, 5%, 0.8)", "hsla(45, 100%, 5%, 1)", "hsla(46, 100%, 7%, 1)", "hsla(45, 100%, 9%, 1)", "hsla(45, 100%, 10%, 1)", "hsla(46, 100%, 12%, 1)", "hsla(49, 100%, 14%, 1)", "hsla(49, 89%, 18%, 1)", "hsla(50, 100%, 22%, 1)", "hsla(54, 100%, 68%, 1)", "hsla(48, 100%, 47%, 1)", "hsla(53, 100%, 91%, 1)", "hsla(53, 100%, 91%, 0)", "hsla(53, 100%, 91%, 0.2)", "hsla(53, 100%, 91%, 0.4)", "hsla(53, 100%, 91%, 0.6)", "hsla(53, 100%, 91%, 0.8)", "hsla(145, 33%, 7%, 0)", "hsla(145, 33%, 7%, 0.2)", "hsla(145, 33%, 7%, 0.4)", "hsla(145, 33%, 7%, 0.6)", "hsla(145, 33%, 7%, 0.8)", "hsla(145, 32%, 7%, 1)", "hsla(155, 44%, 8%, 1)", "hsla(155, 46%, 11%, 1)", "hsla(154, 48%, 13%, 1)", "hsla(155, 50%, 15%, 1)", "hsla(154, 51%, 18%, 1)", "hsla(153, 51%, 22%, 1)", "hsla(151, 52%, 28%, 1)", "hsla(151, 49%, 46%, 1)", "hsla(151, 50%, 53%, 1)", "hsla(136, 73%, 94%, 1)", "hsla(134, 73%, 94%, 0)", "hsla(134, 73%, 94%, 0.2)", "hsla(134, 73%, 94%, 0.4)", "hsla(134, 73%, 94%, 0.6)", "hsla(134, 73%, 94%, 0.8)"];
var ks = ["accentBackground", "accentColor", "background0", "background02", "background04", "background06", "background08", "color1", "color2", "color3", "color4", "color5", "color6", "color7", "color8", "color9", "color10", "color11", "color12", "color0", "color02", "color04", "color06", "color08", "background", "backgroundHover", "backgroundPress", "backgroundFocus", "borderColor", "borderColorHover", "borderColorPress", "borderColorFocus", "color", "colorHover", "colorPress", "colorFocus", "placeholderColor", "outlineColor", "colorTransparent", "blue1", "blue2", "blue3", "blue4", "blue5", "blue6", "blue7", "blue8", "blue9", "blue10", "blue11", "blue12", "green1", "green2", "green3", "green4", "green5", "green6", "green7", "green8", "green9", "green10", "green11", "green12", "red1", "red2", "red3", "red4", "red5", "red6", "red7", "red8", "red9", "red10", "red11", "red12", "yellow1", "yellow2", "yellow3", "yellow4", "yellow5", "yellow6", "yellow7", "yellow8", "yellow9", "yellow10", "yellow11", "yellow12", "shadow1", "shadow2", "shadow3", "shadow4", "shadow5", "shadow6", "black1", "black2", "black3", "black4", "black5", "black6", "black7", "black8", "black9", "black10", "black11", "black12", "white1", "white2", "white3", "white4", "white5", "white6", "white7", "white8", "white9", "white10", "white11", "white12", "shadowColor", "accent1", "accent2", "accent3", "accent4", "accent5", "accent6", "accent7", "accent8", "accent9", "accent10", "accent11", "accent12"];
var n1 = t([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [20, 20], [21, 21], [22, 22], [23, 23], [24, 7], [25, 6], [26, 8], [27, 8], [28, 10], [29, 9], [30, 11], [31, 10], [32, 18], [33, 17], [34, 18], [35, 17], [36, 15], [37, 20], [38, 19], [39, 24], [40, 25], [41, 26], [42, 27], [43, 28], [44, 29], [45, 30], [46, 31], [47, 32], [48, 33], [49, 34], [50, 35], [51, 36], [52, 37], [53, 38], [54, 39], [55, 40], [56, 41], [57, 42], [58, 43], [59, 44], [60, 45], [61, 46], [62, 47], [63, 48], [64, 49], [65, 50], [66, 51], [67, 52], [68, 53], [69, 54], [70, 55], [71, 56], [72, 57], [73, 58], [74, 59], [75, 60], [76, 61], [77, 62], [78, 63], [79, 64], [80, 65], [81, 66], [82, 67], [83, 68], [84, 69], [85, 70], [86, 71], [87, 72], [88, 73], [89, 74], [90, 75], [91, 76], [92, 77], [93, 78], [94, 79], [95, 80], [96, 81], [97, 82], [98, 83], [99, 84], [100, 85], [101, 86], [102, 87], [103, 88], [104, 89], [105, 89], [106, 90], [107, 91], [108, 92], [109, 93], [110, 94], [111, 95], [112, 96], [113, 97], [114, 98], [115, 99], [116, 100], [117, 72], [118, 101], [119, 102], [120, 0], [121, 103], [122, 104], [123, 105], [124, 106], [125, 107], [126, 108], [127, 1], [128, 109], [129, 7]]);
var n2 = t([[0, 16], [1, 9], [2, 110], [3, 111], [4, 112], [5, 113], [6, 114], [7, 101], [8, 102], [9, 0], [10, 103], [11, 104], [12, 105], [13, 106], [14, 107], [15, 108], [16, 1], [17, 109], [18, 7], [19, 2], [20, 3], [21, 4], [22, 5], [23, 6], [24, 101], [25, 102], [26, 114], [27, 114], [28, 103], [29, 104], [30, 0], [31, 103], [32, 7], [33, 109], [34, 7], [35, 109], [36, 108], [37, 3], [38, 2], [39, 115], [40, 116], [41, 117], [42, 118], [43, 119], [44, 120], [45, 121], [46, 122], [47, 32], [48, 123], [49, 124], [50, 125], [51, 126], [52, 127], [53, 128], [54, 129], [55, 130], [56, 131], [57, 132], [58, 133], [59, 44], [60, 134], [61, 135], [62, 136], [63, 137], [64, 138], [65, 139], [66, 140], [67, 141], [68, 142], [69, 143], [70, 144], [71, 56], [72, 145], [73, 146], [74, 147], [75, 148], [76, 149], [77, 150], [78, 151], [79, 152], [80, 153], [81, 154], [82, 155], [83, 68], [84, 156], [85, 157], [86, 158], [87, 159], [88, 160], [89, 77], [90, 161], [91, 162], [92, 163], [93, 78], [94, 79], [95, 80], [96, 81], [97, 82], [98, 83], [99, 84], [100, 85], [101, 86], [102, 87], [103, 88], [104, 89], [105, 89], [106, 90], [107, 91], [108, 92], [109, 93], [110, 94], [111, 95], [112, 96], [113, 97], [114, 98], [115, 99], [116, 100], [117, 159], [118, 7], [119, 8], [120, 9], [121, 10], [122, 11], [123, 12], [124, 13], [125, 14], [126, 15], [127, 16], [128, 17], [129, 18]]);
var n3 = t([[0, 9], [1, 16], [2, 110], [3, 111], [4, 112], [5, 113], [6, 114], [7, 101], [8, 102], [9, 0], [10, 103], [11, 104], [12, 105], [13, 106], [14, 107], [15, 108], [16, 1], [17, 109], [18, 7], [19, 2], [20, 3], [21, 4], [22, 5], [23, 6], [24, 101], [25, 114], [26, 102], [27, 102], [28, 103], [29, 0], [30, 104], [31, 103], [32, 7], [33, 109], [34, 7], [35, 109], [36, 108], [37, 3], [38, 2]]);
var n4 = t([[0, 1], [1, 0], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [20, 20], [21, 21], [22, 22], [23, 23], [24, 7], [25, 8], [26, 6], [27, 6], [28, 10], [29, 11], [30, 9], [31, 10], [32, 18], [33, 17], [34, 18], [35, 17], [36, 15], [37, 20], [38, 19]]);
var n5 = t([[0, 0], [1, 1], [2, 110], [3, 111], [4, 112], [5, 113], [6, 114], [7, 101], [8, 102], [9, 0], [10, 103], [11, 104], [12, 105], [13, 106], [14, 107], [15, 108], [16, 1], [17, 109], [18, 7], [19, 2], [20, 3], [21, 4], [22, 5], [23, 6], [24, 101], [25, 114], [26, 102], [27, 102], [28, 103], [29, 0], [30, 104], [31, 103], [32, 7], [33, 109], [34, 7], [35, 109], [36, 108], [37, 3], [38, 2]]);
var n6 = t([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [20, 20], [21, 21], [22, 22], [23, 23], [24, 7], [25, 6], [26, 8], [27, 8], [28, 10], [29, 9], [30, 11], [31, 10], [32, 18], [33, 17], [34, 18], [35, 17], [36, 15], [37, 20], [38, 19]]);
var n7 = t([[0, 0], [1, 1], [2, 164], [3, 165], [4, 166], [5, 167], [6, 168], [7, 169], [8, 170], [9, 171], [10, 172], [11, 173], [12, 174], [13, 175], [14, 176], [15, 177], [16, 178], [17, 179], [18, 180], [19, 181], [20, 182], [21, 183], [22, 184], [23, 185], [24, 169], [25, 168], [26, 170], [27, 170], [28, 172], [29, 171], [30, 173], [31, 172], [32, 180], [33, 179], [34, 180], [35, 179], [36, 177], [37, 182], [38, 181]]);
var n8 = t([[0, 0], [1, 1], [2, 186], [3, 187], [4, 188], [5, 189], [6, 190], [7, 191], [8, 191], [9, 192], [10, 193], [11, 194], [12, 195], [13, 196], [14, 197], [15, 198], [16, 199], [17, 200], [18, 201], [19, 202], [20, 203], [21, 204], [22, 205], [23, 206], [24, 191], [25, 190], [26, 191], [27, 191], [28, 193], [29, 192], [30, 194], [31, 193], [32, 201], [33, 200], [34, 201], [35, 200], [36, 198], [37, 203], [38, 202]]);
var n9 = t([[0, 0], [1, 1], [2, 207], [3, 208], [4, 209], [5, 210], [6, 211], [7, 212], [8, 213], [9, 214], [10, 215], [11, 216], [12, 217], [13, 218], [14, 219], [15, 220], [16, 221], [17, 222], [18, 223], [19, 224], [20, 225], [21, 226], [22, 227], [23, 228], [24, 212], [25, 211], [26, 213], [27, 213], [28, 215], [29, 214], [30, 216], [31, 215], [32, 223], [33, 222], [34, 223], [35, 222], [36, 220], [37, 225], [38, 224]]);
var n10 = t([[0, 0], [1, 1], [2, 229], [3, 230], [4, 231], [5, 232], [6, 233], [7, 234], [8, 235], [9, 236], [10, 237], [11, 238], [12, 239], [13, 240], [14, 241], [15, 242], [16, 243], [17, 244], [18, 245], [19, 246], [20, 247], [21, 248], [22, 249], [23, 250], [24, 234], [25, 233], [26, 235], [27, 235], [28, 237], [29, 236], [30, 238], [31, 237], [32, 245], [33, 244], [34, 245], [35, 244], [36, 242], [37, 247], [38, 246]]);
var n11 = t([[0, 16], [1, 9], [2, 110], [3, 111], [4, 112], [5, 113], [6, 114], [7, 101], [8, 102], [9, 0], [10, 103], [11, 104], [12, 105], [13, 106], [14, 107], [15, 108], [16, 1], [17, 109], [18, 7], [19, 2], [20, 3], [21, 4], [22, 5], [23, 6], [24, 101], [25, 102], [26, 114], [27, 114], [28, 103], [29, 104], [30, 0], [31, 103], [32, 7], [33, 109], [34, 7], [35, 109], [36, 108], [37, 3], [38, 2]]);
var n12 = t([[0, 16], [1, 9], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 8], [9, 9], [10, 10], [11, 11], [12, 12], [13, 13], [14, 14], [15, 15], [16, 16], [17, 17], [18, 18], [19, 19], [20, 20], [21, 21], [22, 22], [23, 23], [24, 7], [25, 8], [26, 6], [27, 6], [28, 10], [29, 11], [30, 9], [31, 10], [32, 18], [33, 17], [34, 18], [35, 17], [36, 15], [37, 20], [38, 19]]);
var n13 = t([[0, 16], [1, 9], [2, 251], [3, 252], [4, 253], [5, 254], [6, 255], [7, 256], [8, 257], [9, 258], [10, 259], [11, 260], [12, 261], [13, 262], [14, 263], [15, 177], [16, 264], [17, 265], [18, 266], [19, 267], [20, 268], [21, 269], [22, 270], [23, 271], [24, 256], [25, 257], [26, 255], [27, 255], [28, 259], [29, 260], [30, 258], [31, 259], [32, 266], [33, 265], [34, 266], [35, 265], [36, 177], [37, 268], [38, 267]]);
var n14 = t([[0, 16], [1, 9], [2, 272], [3, 273], [4, 274], [5, 275], [6, 276], [7, 277], [8, 278], [9, 279], [10, 280], [11, 281], [12, 282], [13, 283], [14, 284], [15, 198], [16, 285], [17, 286], [18, 287], [19, 288], [20, 289], [21, 290], [22, 291], [23, 292], [24, 277], [25, 278], [26, 276], [27, 276], [28, 280], [29, 281], [30, 279], [31, 280], [32, 287], [33, 286], [34, 287], [35, 286], [36, 198], [37, 289], [38, 288]]);
var n15 = t([[0, 16], [1, 9], [2, 293], [3, 294], [4, 295], [5, 296], [6, 297], [7, 298], [8, 299], [9, 300], [10, 301], [11, 302], [12, 303], [13, 304], [14, 305], [15, 220], [16, 306], [17, 307], [18, 308], [19, 309], [20, 310], [21, 311], [22, 312], [23, 313], [24, 298], [25, 299], [26, 297], [27, 297], [28, 301], [29, 302], [30, 300], [31, 301], [32, 308], [33, 307], [34, 308], [35, 307], [36, 220], [37, 310], [38, 309]]);
var n16 = t([[0, 16], [1, 9], [2, 314], [3, 315], [4, 316], [5, 317], [6, 318], [7, 319], [8, 320], [9, 321], [10, 322], [11, 323], [12, 324], [13, 325], [14, 326], [15, 242], [16, 327], [17, 328], [18, 329], [19, 330], [20, 331], [21, 332], [22, 333], [23, 334], [24, 319], [25, 320], [26, 318], [27, 318], [28, 322], [29, 323], [30, 321], [31, 322], [32, 329], [33, 328], [34, 329], [35, 328], [36, 242], [37, 331], [38, 330]]);
var n17 = t([[32, 18], [33, 17], [34, 18], [35, 17], [36, 15], [37, 20], [24, 8], [25, 7], [26, 9], [27, 9], [28, 11], [29, 10], [31, 11], [30, 12]]);
var n18 = t([[32, 18], [33, 17], [34, 18], [35, 17], [36, 15], [37, 20], [24, 10], [25, 9], [26, 11], [27, 11], [28, 13], [29, 12], [31, 13], [30, 14]]);
var n19 = t([[32, 18], [33, 17], [34, 18], [35, 17], [36, 15], [37, 20], [24, 9], [25, 8], [26, 10], [27, 10], [28, 12], [29, 11], [31, 12], [30, 13]]);
var n20 = t([[0, 1], [1, 0], [2, 19], [3, 20], [4, 21], [5, 22], [6, 23], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13], [13, 12], [14, 11], [15, 10], [16, 9], [17, 8], [18, 7], [19, 2], [20, 3], [21, 4], [22, 5], [23, 6], [24, 18], [25, 23], [26, 17], [27, 17], [28, 15], [29, 16], [30, 14], [31, 15], [32, 7], [33, 8], [34, 7], [35, 8], [36, 10], [37, 3], [38, 2]]);
var n21 = t([[32, 7], [33, 109], [34, 7], [35, 109], [36, 108], [37, 3], [24, 102], [25, 0], [26, 101], [27, 101], [28, 104], [29, 105], [31, 104], [30, 103]]);
var n22 = t([[32, 7], [33, 109], [34, 7], [35, 109], [36, 108], [37, 3], [24, 103], [25, 104], [26, 0], [27, 0], [28, 106], [29, 107], [31, 106], [30, 105]]);
var n23 = t([[32, 7], [33, 109], [34, 7], [35, 109], [36, 108], [37, 3], [24, 0], [25, 103], [26, 102], [27, 102], [28, 105], [29, 106], [31, 105], [30, 104]]);
var n24 = t([[0, 9], [1, 16], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 109], [9, 1], [10, 108], [11, 107], [12, 106], [13, 105], [14, 104], [15, 103], [16, 0], [17, 102], [18, 101], [19, 110], [20, 111], [21, 112], [22, 113], [23, 114], [24, 7], [25, 109], [26, 6], [27, 6], [28, 108], [29, 107], [30, 1], [31, 108], [32, 101], [33, 102], [34, 101], [35, 102], [36, 103], [37, 111], [38, 110]]);
var n25 = t([[32, 7], [33, 109], [34, 7], [35, 109], [36, 108], [37, 3], [24, 102], [25, 101], [26, 0], [27, 0], [28, 104], [29, 103], [31, 104], [30, 105]]);
var n26 = t([[32, 7], [33, 109], [34, 7], [35, 109], [36, 108], [37, 3], [24, 103], [25, 0], [26, 104], [27, 104], [28, 106], [29, 105], [31, 106], [30, 107]]);
var n27 = t([[32, 7], [33, 109], [34, 7], [35, 109], [36, 108], [37, 3], [24, 0], [25, 102], [26, 103], [27, 103], [28, 105], [29, 104], [31, 105], [30, 106]]);
var n28 = t([[0, 16], [1, 9], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 109], [9, 1], [10, 108], [11, 107], [12, 106], [13, 105], [14, 104], [15, 103], [16, 0], [17, 102], [18, 101], [19, 110], [20, 111], [21, 112], [22, 113], [23, 114], [24, 7], [25, 6], [26, 109], [27, 109], [28, 108], [29, 1], [30, 107], [31, 108], [32, 101], [33, 102], [34, 101], [35, 102], [36, 103], [37, 111], [38, 110]]);
var n29 = t([[32, 18], [33, 17], [34, 18], [35, 17], [36, 15], [37, 20], [24, 8], [25, 9], [26, 7], [27, 7], [28, 11], [29, 12], [31, 11], [30, 10]]);
var n30 = t([[32, 18], [33, 17], [34, 18], [35, 17], [36, 15], [37, 20], [24, 10], [25, 11], [26, 9], [27, 9], [28, 13], [29, 14], [31, 13], [30, 12]]);
var n31 = t([[32, 18], [33, 17], [34, 18], [35, 17], [36, 15], [37, 20], [24, 9], [25, 10], [26, 8], [27, 8], [28, 12], [29, 13], [31, 12], [30, 11]]);
var n32 = t([[0, 0], [1, 1], [2, 19], [3, 20], [4, 21], [5, 22], [6, 23], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13], [13, 12], [14, 11], [15, 10], [16, 9], [17, 8], [18, 7], [19, 2], [20, 3], [21, 4], [22, 5], [23, 6], [24, 18], [25, 17], [26, 23], [27, 23], [28, 15], [29, 14], [30, 16], [31, 15], [32, 7], [33, 8], [34, 7], [35, 8], [36, 10], [37, 3], [38, 2]]);
var n33 = t([[0, 1], [1, 0], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 109], [9, 1], [10, 108], [11, 107], [12, 106], [13, 105], [14, 104], [15, 103], [16, 0], [17, 102], [18, 101], [19, 110], [20, 111], [21, 112], [22, 113], [23, 114], [24, 7], [25, 6], [26, 109], [27, 109], [28, 108], [29, 1], [30, 107], [31, 108], [32, 101], [33, 102], [34, 101], [35, 102], [36, 103], [37, 111], [38, 110]]);
var n34 = t([[32, 180], [33, 179], [34, 180], [35, 179], [36, 177], [37, 182], [24, 170], [25, 169], [26, 171], [27, 171], [28, 173], [29, 172], [31, 173], [30, 174]]);
var n35 = t([[32, 180], [33, 179], [34, 180], [35, 179], [36, 177], [37, 182], [24, 172], [25, 171], [26, 173], [27, 173], [28, 175], [29, 174], [31, 175], [30, 176]]);
var n36 = t([[32, 180], [33, 179], [34, 180], [35, 179], [36, 177], [37, 182], [24, 171], [25, 170], [26, 172], [27, 172], [28, 174], [29, 173], [31, 174], [30, 175]]);
var n37 = t([[0, 1], [1, 0], [2, 181], [3, 182], [4, 183], [5, 184], [6, 185], [7, 180], [8, 179], [9, 178], [10, 177], [11, 176], [12, 175], [13, 174], [14, 173], [15, 172], [16, 171], [17, 170], [18, 169], [19, 164], [20, 165], [21, 166], [22, 167], [23, 168], [24, 180], [25, 185], [26, 179], [27, 179], [28, 177], [29, 178], [30, 176], [31, 177], [32, 169], [33, 170], [34, 169], [35, 170], [36, 172], [37, 165], [38, 164]]);
var n38 = t([[32, 201], [33, 200], [34, 201], [35, 200], [36, 198], [37, 203], [24, 191], [25, 191], [26, 192], [27, 192], [28, 194], [29, 193], [31, 194], [30, 195]]);
var n39 = t([[32, 201], [33, 200], [34, 201], [35, 200], [36, 198], [37, 203], [24, 193], [25, 192], [26, 194], [27, 194], [28, 196], [29, 195], [31, 196], [30, 197]]);
var n40 = t([[32, 201], [33, 200], [34, 201], [35, 200], [36, 198], [37, 203], [24, 192], [25, 191], [26, 193], [27, 193], [28, 195], [29, 194], [31, 195], [30, 196]]);
var n41 = t([[0, 1], [1, 0], [2, 202], [3, 203], [4, 204], [5, 205], [6, 206], [7, 201], [8, 200], [9, 199], [10, 198], [11, 197], [12, 196], [13, 195], [14, 194], [15, 193], [16, 192], [17, 191], [18, 191], [19, 186], [20, 187], [21, 188], [22, 189], [23, 190], [24, 201], [25, 206], [26, 200], [27, 200], [28, 198], [29, 199], [30, 197], [31, 198], [32, 191], [33, 191], [34, 191], [35, 191], [36, 193], [37, 187], [38, 186]]);
var n42 = t([[32, 223], [33, 222], [34, 223], [35, 222], [36, 220], [37, 225], [24, 213], [25, 212], [26, 214], [27, 214], [28, 216], [29, 215], [31, 216], [30, 217]]);
var n43 = t([[32, 223], [33, 222], [34, 223], [35, 222], [36, 220], [37, 225], [24, 215], [25, 214], [26, 216], [27, 216], [28, 218], [29, 217], [31, 218], [30, 219]]);
var n44 = t([[32, 223], [33, 222], [34, 223], [35, 222], [36, 220], [37, 225], [24, 214], [25, 213], [26, 215], [27, 215], [28, 217], [29, 216], [31, 217], [30, 218]]);
var n45 = t([[0, 1], [1, 0], [2, 224], [3, 225], [4, 226], [5, 227], [6, 228], [7, 223], [8, 222], [9, 221], [10, 220], [11, 219], [12, 218], [13, 217], [14, 216], [15, 215], [16, 214], [17, 213], [18, 212], [19, 207], [20, 208], [21, 209], [22, 210], [23, 211], [24, 223], [25, 228], [26, 222], [27, 222], [28, 220], [29, 221], [30, 219], [31, 220], [32, 212], [33, 213], [34, 212], [35, 213], [36, 215], [37, 208], [38, 207]]);
var n46 = t([[32, 245], [33, 244], [34, 245], [35, 244], [36, 242], [37, 247], [24, 235], [25, 234], [26, 236], [27, 236], [28, 238], [29, 237], [31, 238], [30, 239]]);
var n47 = t([[32, 245], [33, 244], [34, 245], [35, 244], [36, 242], [37, 247], [24, 237], [25, 236], [26, 238], [27, 238], [28, 240], [29, 239], [31, 240], [30, 241]]);
var n48 = t([[32, 245], [33, 244], [34, 245], [35, 244], [36, 242], [37, 247], [24, 236], [25, 235], [26, 237], [27, 237], [28, 239], [29, 238], [31, 239], [30, 240]]);
var n49 = t([[0, 1], [1, 0], [2, 246], [3, 247], [4, 248], [5, 249], [6, 250], [7, 245], [8, 244], [9, 243], [10, 242], [11, 241], [12, 240], [13, 239], [14, 238], [15, 237], [16, 236], [17, 235], [18, 234], [19, 229], [20, 230], [21, 231], [22, 232], [23, 233], [24, 245], [25, 250], [26, 244], [27, 244], [28, 242], [29, 243], [30, 241], [31, 242], [32, 234], [33, 235], [34, 234], [35, 235], [36, 237], [37, 230], [38, 229]]);
var n50 = t([[0, 9], [1, 16], [2, 19], [3, 20], [4, 21], [5, 22], [6, 23], [7, 18], [8, 17], [9, 16], [10, 15], [11, 14], [12, 13], [13, 12], [14, 11], [15, 10], [16, 9], [17, 8], [18, 7], [19, 2], [20, 3], [21, 4], [22, 5], [23, 6], [24, 18], [25, 17], [26, 23], [27, 23], [28, 15], [29, 14], [30, 16], [31, 15], [32, 7], [33, 8], [34, 7], [35, 8], [36, 10], [37, 3], [38, 2]]);
var n51 = t([[32, 266], [33, 265], [34, 266], [35, 265], [36, 177], [37, 268], [24, 257], [25, 258], [26, 256], [27, 256], [28, 260], [29, 261], [31, 260], [30, 259]]);
var n52 = t([[32, 266], [33, 265], [34, 266], [35, 265], [36, 177], [37, 268], [24, 259], [25, 260], [26, 258], [27, 258], [28, 262], [29, 263], [31, 262], [30, 261]]);
var n53 = t([[32, 266], [33, 265], [34, 266], [35, 265], [36, 177], [37, 268], [24, 258], [25, 259], [26, 257], [27, 257], [28, 261], [29, 262], [31, 261], [30, 260]]);
var n54 = t([[0, 9], [1, 16], [2, 267], [3, 268], [4, 269], [5, 270], [6, 271], [7, 266], [8, 265], [9, 264], [10, 177], [11, 263], [12, 262], [13, 261], [14, 260], [15, 259], [16, 258], [17, 257], [18, 256], [19, 251], [20, 252], [21, 253], [22, 254], [23, 255], [24, 266], [25, 265], [26, 271], [27, 271], [28, 177], [29, 263], [30, 264], [31, 177], [32, 256], [33, 257], [34, 256], [35, 257], [36, 259], [37, 252], [38, 251]]);
var n55 = t([[32, 287], [33, 286], [34, 287], [35, 286], [36, 198], [37, 289], [24, 278], [25, 279], [26, 277], [27, 277], [28, 281], [29, 282], [31, 281], [30, 280]]);
var n56 = t([[32, 287], [33, 286], [34, 287], [35, 286], [36, 198], [37, 289], [24, 280], [25, 281], [26, 279], [27, 279], [28, 283], [29, 284], [31, 283], [30, 282]]);
var n57 = t([[32, 287], [33, 286], [34, 287], [35, 286], [36, 198], [37, 289], [24, 279], [25, 280], [26, 278], [27, 278], [28, 282], [29, 283], [31, 282], [30, 281]]);
var n58 = t([[0, 9], [1, 16], [2, 288], [3, 289], [4, 290], [5, 291], [6, 292], [7, 287], [8, 286], [9, 285], [10, 198], [11, 284], [12, 283], [13, 282], [14, 281], [15, 280], [16, 279], [17, 278], [18, 277], [19, 272], [20, 273], [21, 274], [22, 275], [23, 276], [24, 287], [25, 286], [26, 292], [27, 292], [28, 198], [29, 284], [30, 285], [31, 198], [32, 277], [33, 278], [34, 277], [35, 278], [36, 280], [37, 273], [38, 272]]);
var n59 = t([[32, 308], [33, 307], [34, 308], [35, 307], [36, 220], [37, 310], [24, 299], [25, 300], [26, 298], [27, 298], [28, 302], [29, 303], [31, 302], [30, 301]]);
var n60 = t([[32, 308], [33, 307], [34, 308], [35, 307], [36, 220], [37, 310], [24, 301], [25, 302], [26, 300], [27, 300], [28, 304], [29, 305], [31, 304], [30, 303]]);
var n61 = t([[32, 308], [33, 307], [34, 308], [35, 307], [36, 220], [37, 310], [24, 300], [25, 301], [26, 299], [27, 299], [28, 303], [29, 304], [31, 303], [30, 302]]);
var n62 = t([[0, 9], [1, 16], [2, 309], [3, 310], [4, 311], [5, 312], [6, 313], [7, 308], [8, 307], [9, 306], [10, 220], [11, 305], [12, 304], [13, 303], [14, 302], [15, 301], [16, 300], [17, 299], [18, 298], [19, 293], [20, 294], [21, 295], [22, 296], [23, 297], [24, 308], [25, 307], [26, 313], [27, 313], [28, 220], [29, 305], [30, 306], [31, 220], [32, 298], [33, 299], [34, 298], [35, 299], [36, 301], [37, 294], [38, 293]]);
var n63 = t([[32, 329], [33, 328], [34, 329], [35, 328], [36, 242], [37, 331], [24, 320], [25, 321], [26, 319], [27, 319], [28, 323], [29, 324], [31, 323], [30, 322]]);
var n64 = t([[32, 329], [33, 328], [34, 329], [35, 328], [36, 242], [37, 331], [24, 322], [25, 323], [26, 321], [27, 321], [28, 325], [29, 326], [31, 325], [30, 324]]);
var n65 = t([[32, 329], [33, 328], [34, 329], [35, 328], [36, 242], [37, 331], [24, 321], [25, 322], [26, 320], [27, 320], [28, 324], [29, 325], [31, 324], [30, 323]]);
var n66 = t([[0, 9], [1, 16], [2, 330], [3, 331], [4, 332], [5, 333], [6, 334], [7, 329], [8, 328], [9, 327], [10, 242], [11, 326], [12, 325], [13, 324], [14, 323], [15, 322], [16, 321], [17, 320], [18, 319], [19, 314], [20, 315], [21, 316], [22, 317], [23, 318], [24, 329], [25, 328], [26, 334], [27, 334], [28, 242], [29, 326], [30, 327], [31, 242], [32, 319], [33, 320], [34, 319], [35, 320], [36, 322], [37, 315], [38, 314]]);
var themes = {
  light: n1,
  dark: n2,
  light_accent: n3,
  dark_accent: n4,
  light_black: n5,
  light_white: n6,
  light_blue: n7,
  light_red: n8,
  light_yellow: n9,
  light_green: n10,
  dark_black: n11,
  dark_white: n12,
  dark_blue: n13,
  dark_red: n14,
  dark_yellow: n15,
  dark_green: n16,
  light_ListItem: n17,
  light_SelectTrigger: n17,
  light_Card: n17,
  light_Progress: n17,
  light_TooltipArrow: n17,
  light_SliderTrack: n17,
  light_Input: n17,
  light_TextArea: n17,
  light_white_ListItem: n17,
  light_white_SelectTrigger: n17,
  light_white_Card: n17,
  light_white_Progress: n17,
  light_white_TooltipArrow: n17,
  light_white_SliderTrack: n17,
  light_white_Input: n17,
  light_white_TextArea: n17,
  light_Button: n18,
  light_SliderTrackActive: n18,
  light_white_Button: n18,
  light_white_SliderTrackActive: n18,
  light_Checkbox: n19,
  light_Switch: n19,
  light_TooltipContent: n19,
  light_RadioGroupItem: n19,
  light_white_Checkbox: n19,
  light_white_Switch: n19,
  light_white_TooltipContent: n19,
  light_white_RadioGroupItem: n19,
  light_SwitchThumb: n20,
  light_SliderThumb: n20,
  light_Tooltip: n20,
  light_ProgressIndicator: n20,
  light_white_SwitchThumb: n20,
  light_white_SliderThumb: n20,
  light_white_Tooltip: n20,
  light_white_ProgressIndicator: n20,
  dark_ListItem: n21,
  dark_SelectTrigger: n21,
  dark_Card: n21,
  dark_Progress: n21,
  dark_TooltipArrow: n21,
  dark_SliderTrack: n21,
  dark_Input: n21,
  dark_TextArea: n21,
  dark_black_ListItem: n21,
  dark_black_SelectTrigger: n21,
  dark_black_Card: n21,
  dark_black_Progress: n21,
  dark_black_TooltipArrow: n21,
  dark_black_SliderTrack: n21,
  dark_black_Input: n21,
  dark_black_TextArea: n21,
  dark_Button: n22,
  dark_SliderTrackActive: n22,
  dark_black_Button: n22,
  dark_black_SliderTrackActive: n22,
  dark_Checkbox: n23,
  dark_Switch: n23,
  dark_TooltipContent: n23,
  dark_RadioGroupItem: n23,
  dark_black_Checkbox: n23,
  dark_black_Switch: n23,
  dark_black_TooltipContent: n23,
  dark_black_RadioGroupItem: n23,
  dark_SwitchThumb: n24,
  dark_SliderThumb: n24,
  dark_Tooltip: n24,
  dark_ProgressIndicator: n24,
  dark_black_SwitchThumb: n24,
  dark_black_SliderThumb: n24,
  dark_black_Tooltip: n24,
  dark_black_ProgressIndicator: n24,
  light_accent_ListItem: n25,
  light_accent_SelectTrigger: n25,
  light_accent_Card: n25,
  light_accent_Progress: n25,
  light_accent_TooltipArrow: n25,
  light_accent_SliderTrack: n25,
  light_accent_Input: n25,
  light_accent_TextArea: n25,
  light_black_ListItem: n25,
  light_black_SelectTrigger: n25,
  light_black_Card: n25,
  light_black_Progress: n25,
  light_black_TooltipArrow: n25,
  light_black_SliderTrack: n25,
  light_black_Input: n25,
  light_black_TextArea: n25,
  light_accent_Button: n26,
  light_accent_SliderTrackActive: n26,
  light_black_Button: n26,
  light_black_SliderTrackActive: n26,
  light_accent_Checkbox: n27,
  light_accent_Switch: n27,
  light_accent_TooltipContent: n27,
  light_accent_RadioGroupItem: n27,
  light_black_Checkbox: n27,
  light_black_Switch: n27,
  light_black_TooltipContent: n27,
  light_black_RadioGroupItem: n27,
  light_accent_SwitchThumb: n28,
  light_accent_SliderThumb: n28,
  light_accent_Tooltip: n28,
  light_accent_ProgressIndicator: n28,
  dark_accent_ListItem: n29,
  dark_accent_SelectTrigger: n29,
  dark_accent_Card: n29,
  dark_accent_Progress: n29,
  dark_accent_TooltipArrow: n29,
  dark_accent_SliderTrack: n29,
  dark_accent_Input: n29,
  dark_accent_TextArea: n29,
  dark_white_ListItem: n29,
  dark_white_SelectTrigger: n29,
  dark_white_Card: n29,
  dark_white_Progress: n29,
  dark_white_TooltipArrow: n29,
  dark_white_SliderTrack: n29,
  dark_white_Input: n29,
  dark_white_TextArea: n29,
  dark_accent_Button: n30,
  dark_accent_SliderTrackActive: n30,
  dark_white_Button: n30,
  dark_white_SliderTrackActive: n30,
  dark_accent_Checkbox: n31,
  dark_accent_Switch: n31,
  dark_accent_TooltipContent: n31,
  dark_accent_RadioGroupItem: n31,
  dark_white_Checkbox: n31,
  dark_white_Switch: n31,
  dark_white_TooltipContent: n31,
  dark_white_RadioGroupItem: n31,
  dark_accent_SwitchThumb: n32,
  dark_accent_SliderThumb: n32,
  dark_accent_Tooltip: n32,
  dark_accent_ProgressIndicator: n32,
  light_black_SwitchThumb: n33,
  light_black_SliderThumb: n33,
  light_black_Tooltip: n33,
  light_black_ProgressIndicator: n33,
  light_blue_ListItem: n34,
  light_blue_SelectTrigger: n34,
  light_blue_Card: n34,
  light_blue_Progress: n34,
  light_blue_TooltipArrow: n34,
  light_blue_SliderTrack: n34,
  light_blue_Input: n34,
  light_blue_TextArea: n34,
  light_blue_Button: n35,
  light_blue_SliderTrackActive: n35,
  light_blue_Checkbox: n36,
  light_blue_Switch: n36,
  light_blue_TooltipContent: n36,
  light_blue_RadioGroupItem: n36,
  light_blue_SwitchThumb: n37,
  light_blue_SliderThumb: n37,
  light_blue_Tooltip: n37,
  light_blue_ProgressIndicator: n37,
  light_red_ListItem: n38,
  light_red_SelectTrigger: n38,
  light_red_Card: n38,
  light_red_Progress: n38,
  light_red_TooltipArrow: n38,
  light_red_SliderTrack: n38,
  light_red_Input: n38,
  light_red_TextArea: n38,
  light_red_Button: n39,
  light_red_SliderTrackActive: n39,
  light_red_Checkbox: n40,
  light_red_Switch: n40,
  light_red_TooltipContent: n40,
  light_red_RadioGroupItem: n40,
  light_red_SwitchThumb: n41,
  light_red_SliderThumb: n41,
  light_red_Tooltip: n41,
  light_red_ProgressIndicator: n41,
  light_yellow_ListItem: n42,
  light_yellow_SelectTrigger: n42,
  light_yellow_Card: n42,
  light_yellow_Progress: n42,
  light_yellow_TooltipArrow: n42,
  light_yellow_SliderTrack: n42,
  light_yellow_Input: n42,
  light_yellow_TextArea: n42,
  light_yellow_Button: n43,
  light_yellow_SliderTrackActive: n43,
  light_yellow_Checkbox: n44,
  light_yellow_Switch: n44,
  light_yellow_TooltipContent: n44,
  light_yellow_RadioGroupItem: n44,
  light_yellow_SwitchThumb: n45,
  light_yellow_SliderThumb: n45,
  light_yellow_Tooltip: n45,
  light_yellow_ProgressIndicator: n45,
  light_green_ListItem: n46,
  light_green_SelectTrigger: n46,
  light_green_Card: n46,
  light_green_Progress: n46,
  light_green_TooltipArrow: n46,
  light_green_SliderTrack: n46,
  light_green_Input: n46,
  light_green_TextArea: n46,
  light_green_Button: n47,
  light_green_SliderTrackActive: n47,
  light_green_Checkbox: n48,
  light_green_Switch: n48,
  light_green_TooltipContent: n48,
  light_green_RadioGroupItem: n48,
  light_green_SwitchThumb: n49,
  light_green_SliderThumb: n49,
  light_green_Tooltip: n49,
  light_green_ProgressIndicator: n49,
  dark_white_SwitchThumb: n50,
  dark_white_SliderThumb: n50,
  dark_white_Tooltip: n50,
  dark_white_ProgressIndicator: n50,
  dark_blue_ListItem: n51,
  dark_blue_SelectTrigger: n51,
  dark_blue_Card: n51,
  dark_blue_Progress: n51,
  dark_blue_TooltipArrow: n51,
  dark_blue_SliderTrack: n51,
  dark_blue_Input: n51,
  dark_blue_TextArea: n51,
  dark_blue_Button: n52,
  dark_blue_SliderTrackActive: n52,
  dark_blue_Checkbox: n53,
  dark_blue_Switch: n53,
  dark_blue_TooltipContent: n53,
  dark_blue_RadioGroupItem: n53,
  dark_blue_SwitchThumb: n54,
  dark_blue_SliderThumb: n54,
  dark_blue_Tooltip: n54,
  dark_blue_ProgressIndicator: n54,
  dark_red_ListItem: n55,
  dark_red_SelectTrigger: n55,
  dark_red_Card: n55,
  dark_red_Progress: n55,
  dark_red_TooltipArrow: n55,
  dark_red_SliderTrack: n55,
  dark_red_Input: n55,
  dark_red_TextArea: n55,
  dark_red_Button: n56,
  dark_red_SliderTrackActive: n56,
  dark_red_Checkbox: n57,
  dark_red_Switch: n57,
  dark_red_TooltipContent: n57,
  dark_red_RadioGroupItem: n57,
  dark_red_SwitchThumb: n58,
  dark_red_SliderThumb: n58,
  dark_red_Tooltip: n58,
  dark_red_ProgressIndicator: n58,
  dark_yellow_ListItem: n59,
  dark_yellow_SelectTrigger: n59,
  dark_yellow_Card: n59,
  dark_yellow_Progress: n59,
  dark_yellow_TooltipArrow: n59,
  dark_yellow_SliderTrack: n59,
  dark_yellow_Input: n59,
  dark_yellow_TextArea: n59,
  dark_yellow_Button: n60,
  dark_yellow_SliderTrackActive: n60,
  dark_yellow_Checkbox: n61,
  dark_yellow_Switch: n61,
  dark_yellow_TooltipContent: n61,
  dark_yellow_RadioGroupItem: n61,
  dark_yellow_SwitchThumb: n62,
  dark_yellow_SliderThumb: n62,
  dark_yellow_Tooltip: n62,
  dark_yellow_ProgressIndicator: n62,
  dark_green_ListItem: n63,
  dark_green_SelectTrigger: n63,
  dark_green_Card: n63,
  dark_green_Progress: n63,
  dark_green_TooltipArrow: n63,
  dark_green_SliderTrack: n63,
  dark_green_Input: n63,
  dark_green_TextArea: n63,
  dark_green_Button: n64,
  dark_green_SliderTrackActive: n64,
  dark_green_Checkbox: n65,
  dark_green_Switch: n65,
  dark_green_TooltipContent: n65,
  dark_green_RadioGroupItem: n65,
  dark_green_SwitchThumb: n66,
  dark_green_SliderThumb: n66,
  dark_green_Tooltip: n66,
  dark_green_ProgressIndicator: n66
};

// node_modules/@tamagui/constants/dist/esm/constants.mjs
var import_react = require("react");
var import_react2 = require("react");
var isWeb = true;
var isWindowDefined = typeof window < "u";
var isServer = isWeb && !isWindowDefined;
var isClient = isWeb && isWindowDefined;
var useIsomorphicLayoutEffect = isServer ? import_react.useEffect : import_react.useLayoutEffect;
var isChrome = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
var isIos = process.env.TEST_NATIVE_PLATFORM === "ios";

// node_modules/@tamagui/use-presence/dist/esm/PresenceContext.mjs
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var PresenceContext = React.createContext(null);
var ResetPresence = /* @__PURE__ */ __name((props) => {
  const parent = React.useContext(PresenceContext);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresenceContext.Provider, {
    value: props.disable ? parent : null,
    children: props.children
  });
}, "ResetPresence");

// node_modules/@tamagui/use-presence/dist/esm/usePresence.mjs
var React2 = __toESM(require("react"), 1);
function usePresence() {
  const context = React2.useContext(PresenceContext);
  if (!context) return [true, null, context];
  const {
    id,
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context;
  return React2.useEffect(() => register(id), []), !isPresent2 && onExitComplete ? [false, () => onExitComplete?.(id), context] : [true, void 0, context];
}
__name(usePresence, "usePresence");

// node_modules/@tamagui/animations-css/dist/esm/createAnimations.mjs
var import_web = require("@tamagui/core");
var import_react3 = __toESM(require("react"), 1);
function extractDuration(animation) {
  const msMatch = animation.match(/(\d+(?:\.\d+)?)\s*ms/);
  if (msMatch) return Number.parseInt(msMatch[1], 10);
  const sMatch = animation.match(/(\d+(?:\.\d+)?)\s*s/);
  return sMatch ? Math.round(Number.parseFloat(sMatch[1]) * 1e3) : 300;
}
__name(extractDuration, "extractDuration");
function createAnimations(animations) {
  const reactionListeners = /* @__PURE__ */ new WeakMap();
  return {
    animations,
    usePresence,
    ResetPresence,
    supportsCSS: true,
    useAnimatedNumber(initial) {
      const [val, setVal] = import_react3.default.useState(initial), [onFinish, setOnFinish] = (0, import_react3.useState)();
      return useIsomorphicLayoutEffect(() => {
        onFinish && (onFinish?.(), setOnFinish(void 0));
      }, [onFinish]), {
        getInstance() {
          return setVal;
        },
        getValue() {
          return val;
        },
        setValue(next, config2, onFinish2) {
          setVal(next), setOnFinish(onFinish2);
        },
        stop() {
        }
      };
    },
    useAnimatedNumberReaction({
      value
    }, onValue) {
      import_react3.default.useEffect(() => {
        const instance = value.getInstance();
        let queue = reactionListeners.get(instance);
        if (!queue) {
          const next = /* @__PURE__ */ new Set();
          reactionListeners.set(instance, next), queue = next;
        }
        return queue.add(onValue), () => {
          queue?.delete(onValue);
        };
      }, []);
    },
    useAnimatedNumberStyle(val, getStyle) {
      return getStyle(val.getValue());
    },
    useAnimations: /* @__PURE__ */ __name(({
      props,
      presence,
      style,
      componentState,
      stateRef
    }) => {
      const isEntering = !!componentState.unmounted, isExiting = presence?.[0] === false, sendExitComplete = presence?.[1], [animationKey, animationConfig] = Array.isArray(props.animation) ? props.animation : [props.animation], animation = animations[animationKey], keys = props.animateOnly ?? ["all"];
      return useIsomorphicLayoutEffect(() => {
        const host = stateRef.current.host;
        if (!sendExitComplete || !isExiting || !host) return;
        const node = host, fallbackTimeout = animation ? extractDuration(animation) : 200, timeoutId = setTimeout(() => {
          sendExitComplete?.();
        }, fallbackTimeout), onFinishAnimation = /* @__PURE__ */ __name(() => {
          clearTimeout(timeoutId), sendExitComplete?.();
        }, "onFinishAnimation");
        return node.addEventListener("transitionend", onFinishAnimation), node.addEventListener("transitioncancel", onFinishAnimation), () => {
          clearTimeout(timeoutId), node.removeEventListener("transitionend", onFinishAnimation), node.removeEventListener("transitioncancel", onFinishAnimation);
        };
      }, [sendExitComplete, isExiting]), animation && (Array.isArray(style.transform) && (style.transform = (0, import_web.transformsToString)(style.transform)), style.transition = keys.map((key) => {
        const override = animations[animationConfig?.[key]] ?? animation;
        return `${key} ${override}`;
      }).join(", ")), process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info("CSS animation", {
        props,
        animations,
        animation,
        animationKey,
        style,
        isEntering,
        isExiting
      }), animation ? {
        style,
        className: isEntering ? "t_unmounted" : ""
      } : null;
    }, "useAnimations")
  };
}
__name(createAnimations, "createAnimations");

// node_modules/@tamagui/config/dist/esm/animationsCSS.mjs
var smoothBezier = "cubic-bezier(0.215, 0.610, 0.355, 1.000)";
var animationsCSS = createAnimations({
  "75ms": "ease-in 75ms",
  "100ms": "ease-in 100ms",
  "200ms": "ease-in 200ms",
  bouncy: "ease-in 200ms",
  superBouncy: "ease-in 500ms",
  lazy: "ease-in 1000ms",
  medium: "ease-in 300ms",
  slow: "ease-in 500ms",
  quick: `${smoothBezier} 400ms`,
  quicker: `${smoothBezier} 300ms`,
  quickest: `${smoothBezier} 200ms`,
  tooltip: "ease-in 400ms"
});

// node_modules/@tamagui/config/dist/esm/v4-fonts.mjs
var import_core = require("@tamagui/core");
var createSystemFont = /* @__PURE__ */ __name(({
  font = {},
  sizeLineHeight = /* @__PURE__ */ __name((size2) => size2 + 10, "sizeLineHeight"),
  sizeSize = /* @__PURE__ */ __name((size2) => size2 * 1, "sizeSize")
} = {}) => {
  const size2 = Object.fromEntries(Object.entries({
    ...defaultSizes,
    ...font.size
  }).map(([k, v]) => [k, sizeSize(+v)]));
  return (0, import_core.createFont)({
    family: import_core.isWeb ? '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "System",
    lineHeight: Object.fromEntries(Object.entries(size2).map(([k, v]) => [k, sizeLineHeight((0, import_core.getVariableValue)(v))])),
    weight: {
      4: "300"
    },
    letterSpacing: {
      4: 0
    },
    ...font,
    size: size2
  });
}, "createSystemFont");
var defaultSizes = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 134
};
var fonts = {
  body: createSystemFont(),
  heading: createSystemFont({
    sizeSize: /* @__PURE__ */ __name((n) => n * 1.4, "sizeSize")
  })
};

// node_modules/@tamagui/config/dist/esm/v4-media.mjs
var breakpoints = {
  "2xl": 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
  xs: 460,
  "2xs": 340
};
var media = {
  maxXs: {
    maxWidth: breakpoints.xs
  },
  max2xs: {
    maxWidth: breakpoints["2xs"]
  },
  maxSm: {
    maxWidth: breakpoints.sm
  },
  maxMd: {
    maxWidth: breakpoints.md
  },
  maxLg: {
    maxWidth: breakpoints.lg
  },
  maxXl: {
    maxWidth: breakpoints.xl
  },
  max2Xl: {
    maxWidth: breakpoints["2xl"]
  },
  // for site
  "2xl": {
    minWidth: breakpoints["2xl"]
  },
  xl: {
    minWidth: breakpoints.xl
  },
  lg: {
    minWidth: breakpoints.lg
  },
  md: {
    minWidth: breakpoints.md
  },
  sm: {
    minWidth: breakpoints.sm
  },
  xs: {
    minWidth: breakpoints.xs
  },
  "2xs": {
    minWidth: breakpoints["2xs"]
  }
};
var mediaQueryDefaultActive = {
  "2xl": false,
  xl: false,
  lg: false,
  md: false,
  sm: false,
  xs: true,
  "2xs": true
};

// node_modules/@tamagui/config/dist/esm/v4.mjs
var selectionStyles = /* @__PURE__ */ __name((theme) => theme.color5 ? {
  backgroundColor: theme.color5,
  color: theme.color11
} : null, "selectionStyles");
var settings = {
  mediaQueryDefaultActive,
  defaultFont: "body",
  fastSchemeChange: true,
  shouldAddPrefersColorThemes: true,
  allowedStyleValues: "somewhat-strict-web",
  themeClassNameOnRoot: true,
  onlyAllowShorthands: true,
  // allow two inverses (tooltips, etc)
  // TODO on inverse theme changes
  maxDarkLightNesting: 2
};
var defaultConfig = {
  animations: animationsCSS,
  media,
  shorthands,
  themes,
  tokens,
  fonts,
  selectionStyles,
  settings
};

// node_modules/tamagui/dist/esm/createTamagui.mjs
var import_core2 = require("@tamagui/core");
var createTamagui = process.env.NODE_ENV !== "development" ? import_core2.createTamagui : (conf) => {
  const sizeTokenKeys = ["$true"], hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => expectedKeys.every((k) => typeof obj[k] < "u"), "hasKeys"), tamaguiConfig = (0, import_core2.createTamagui)(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    if (!tokenSet) throw new Error(`Expected tokens for "${name}" in ${Object.keys(tamaguiConfig.tokensParsed).join(", ")}`);
    if (!hasKeys(sizeTokenKeys, tokenSet)) throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
  }
  const expected = Object.keys(tamaguiConfig.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name], received = Object.keys(tokenSet);
    if (!received.some((rk) => expected.includes(rk))) throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
  }
  return tamaguiConfig;
};

// node_modules/@tamagui/colors/dist/esm/dark/green.mjs
var green = {
  green1: "hsl(146, 30.0%, 7.4%)",
  green2: "hsl(155, 44.2%, 8.4%)",
  green3: "hsl(155, 46.7%, 10.9%)",
  green4: "hsl(154, 48.4%, 12.9%)",
  green5: "hsl(154, 49.7%, 14.9%)",
  green6: "hsl(154, 50.9%, 17.6%)",
  green7: "hsl(153, 51.8%, 21.8%)",
  green8: "hsl(151, 51.7%, 28.4%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(151, 49.3%, 46.5%)",
  green11: "hsl(151, 50.0%, 53.2%)",
  green12: "hsl(137, 72.0%, 94.0%)"
};

// node_modules/@tamagui/colors/dist/esm/dark/red.mjs
var red = {
  red1: "hsl(353, 23.0%, 9.8%)",
  red2: "hsl(357, 34.4%, 12.0%)",
  red3: "hsl(356, 43.4%, 16.4%)",
  red4: "hsl(356, 47.6%, 19.2%)",
  red5: "hsl(356, 51.1%, 21.9%)",
  red6: "hsl(356, 55.2%, 25.9%)",
  red7: "hsl(357, 60.2%, 31.8%)",
  red8: "hsl(358, 65.0%, 40.4%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 85.3%, 64.0%)",
  red11: "hsl(358, 100%, 69.5%)",
  red12: "hsl(351, 89.0%, 96.0%)"
};

// node_modules/@tamagui/colors/dist/esm/dark/yellow.mjs
var yellow = {
  yellow1: "hsl(45, 100%, 5.5%)",
  yellow2: "hsl(46, 100%, 6.7%)",
  yellow3: "hsl(45, 100%, 8.7%)",
  yellow4: "hsl(45, 100%, 10.4%)",
  yellow5: "hsl(47, 100%, 12.1%)",
  yellow6: "hsl(49, 100%, 14.3%)",
  yellow7: "hsl(49, 90.3%, 18.4%)",
  yellow8: "hsl(50, 100%, 22.0%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(54, 100%, 68.0%)",
  yellow11: "hsl(48, 100%, 47.0%)",
  yellow12: "hsl(53, 100%, 91.0%)"
};

// node_modules/@tamagui/colors/dist/esm/light/green.mjs
var green2 = {
  green1: "hsl(136, 50.0%, 98.9%)",
  green2: "hsl(138, 62.5%, 96.9%)",
  green3: "hsl(139, 55.2%, 94.5%)",
  green4: "hsl(140, 48.7%, 91.0%)",
  green5: "hsl(141, 43.7%, 86.0%)",
  green6: "hsl(143, 40.3%, 79.0%)",
  green7: "hsl(146, 38.5%, 69.0%)",
  green8: "hsl(151, 40.2%, 54.1%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(152, 57.5%, 37.6%)",
  green11: "hsl(153, 67.0%, 28.5%)",
  green12: "hsl(155, 40.0%, 14.0%)"
};

// node_modules/@tamagui/colors/dist/esm/light/red.mjs
var red2 = {
  red1: "hsl(359, 100%, 99.4%)",
  red2: "hsl(359, 100%, 98.6%)",
  red3: "hsl(360, 100%, 96.8%)",
  red4: "hsl(360, 97.9%, 94.8%)",
  red5: "hsl(360, 90.2%, 91.9%)",
  red6: "hsl(360, 81.7%, 87.8%)",
  red7: "hsl(359, 74.2%, 81.7%)",
  red8: "hsl(359, 69.5%, 74.3%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 69.4%, 55.2%)",
  red11: "hsl(358, 65.0%, 48.7%)",
  red12: "hsl(354, 50.0%, 14.6%)"
};

// node_modules/@tamagui/colors/dist/esm/light/yellow.mjs
var yellow2 = {
  yellow1: "hsl(60, 54.0%, 98.5%)",
  yellow2: "hsl(52, 100%, 95.5%)",
  yellow3: "hsl(55, 100%, 90.9%)",
  yellow4: "hsl(54, 100%, 86.6%)",
  yellow5: "hsl(52, 97.9%, 82.0%)",
  yellow6: "hsl(50, 89.4%, 76.1%)",
  yellow7: "hsl(47, 80.4%, 68.0%)",
  yellow8: "hsl(48, 100%, 46.1%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(50, 100%, 48.5%)",
  yellow11: "hsl(42, 100%, 29.0%)",
  yellow12: "hsl(40, 55.0%, 13.5%)"
};

// themes/themes.ts
var darkPalette = [
  "hsla(0, 0%, 10%, 1)",
  "hsla(0, 0%, 14%, 1)",
  "hsla(0, 0%, 19%, 1)",
  "hsla(0, 0%, 23%, 1)",
  "hsla(0, 0%, 28%, 1)",
  "hsla(0, 0%, 32%, 1)",
  "hsla(0, 0%, 37%, 1)",
  "hsla(0, 0%, 41%, 1)",
  "hsla(0, 0%, 46%, 1)",
  "hsla(0, 0%, 50%, 1)",
  "hsla(0, 15%, 93%, 1)",
  "hsla(0, 15%, 99%, 1)"
];
var lightPalette = [
  "hsla(0, 0%, 100%, 1)",
  "hsla(0, 0%, 94%, 1)",
  "hsla(0, 0%, 89%, 1)",
  "hsla(0, 0%, 83%, 1)",
  "hsla(0, 0%, 78%, 1)",
  "hsla(0, 0%, 72%, 1)",
  "hsla(0, 0%, 67%, 1)",
  "hsla(0, 0%, 61%, 1)",
  "hsla(0, 0%, 56%, 1)",
  "hsla(0, 0%, 50%, 1)",
  "hsla(0, 15%, 15%, 1)",
  "hsla(0, 15%, 1%, 1)"
];
var lightShadows = {
  shadow1: "rgba(0,0,0,0.04)",
  shadow2: "rgba(0,0,0,0.08)",
  shadow3: "rgba(0,0,0,0.16)",
  shadow4: "rgba(0,0,0,0.24)",
  shadow5: "rgba(0,0,0,0.32)",
  shadow6: "rgba(0,0,0,0.4)"
};
var darkShadows = {
  shadow1: "rgba(0,0,0,0.2)",
  shadow2: "rgba(0,0,0,0.3)",
  shadow3: "rgba(0,0,0,0.4)",
  shadow4: "rgba(0,0,0,0.5)",
  shadow5: "rgba(0,0,0,0.6)",
  shadow6: "rgba(0,0,0,0.7)"
};
var builtThemes = createThemes({
  componentThemes: defaultComponentThemes,
  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette
    },
    extra: {
      light: {
        ...green2,
        ...red2,
        ...yellow2,
        ...lightShadows,
        shadowColor: lightShadows.shadow1
      },
      dark: {
        ...green,
        ...red,
        ...yellow,
        ...darkShadows,
        shadowColor: darkShadows.shadow1
      }
    }
  },
  accent: {
    palette: {
      dark: [
        "hsla(250, 50%, 35%, 1)",
        "hsla(250, 50%, 38%, 1)",
        "hsla(250, 50%, 41%, 1)",
        "hsla(250, 50%, 43%, 1)",
        "hsla(250, 50%, 46%, 1)",
        "hsla(250, 50%, 49%, 1)",
        "hsla(250, 50%, 52%, 1)",
        "hsla(250, 50%, 54%, 1)",
        "hsla(250, 50%, 57%, 1)",
        "hsla(250, 50%, 60%, 1)",
        "hsla(250, 50%, 90%, 1)",
        "hsla(250, 50%, 95%, 1)"
      ],
      light: [
        "hsla(250, 50%, 40%, 1)",
        "hsla(250, 50%, 43%, 1)",
        "hsla(250, 50%, 46%, 1)",
        "hsla(250, 50%, 48%, 1)",
        "hsla(250, 50%, 51%, 1)",
        "hsla(250, 50%, 54%, 1)",
        "hsla(250, 50%, 57%, 1)",
        "hsla(250, 50%, 59%, 1)",
        "hsla(250, 50%, 62%, 1)",
        "hsla(250, 50%, 65%, 1)",
        "hsla(250, 50%, 95%, 1)",
        "hsla(250, 50%, 95%, 1)"
      ]
    }
  },
  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(yellow),
        light: Object.values(yellow2)
      }
    },
    error: {
      palette: {
        dark: Object.values(red),
        light: Object.values(red2)
      }
    },
    success: {
      palette: {
        dark: Object.values(green),
        light: Object.values(green2)
      }
    }
  }
  // optionally add more, can pass palette or template
  // grandChildrenThemes: {
  //   alt1: {
  //     template: 'alt1',
  //   },
  //   alt2: {
  //     template: 'alt2',
  //   },
  //   surface1: {
  //     template: 'surface1',
  //   },
  //   surface2: {
  //     template: 'surface2',
  //   },
  //   surface3: {
  //     template: 'surface3',
  //   },
  // },
});
var themes2 = process.env.TAMAGUI_ENVIRONMENT === "client" && process.env.NODE_ENV === "production" ? {} : builtThemes;

// tamagui.config.ts
var config = createTamagui({
  ...defaultConfig,
  themes: themes2
  // ... 其他配置, 如 media queries, shorthands
});
var tamagui_config_default = config;
