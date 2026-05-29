---
name: 🚀 Performance Issue
about: Report performance problems or optimization opportunities
title: "🚀 [Performance] "
labels: ["performance", "optimization", "needs-triage"]
assignees: []
---

## 🚀 Performance Issue

<!-- Describe the performance problem -->

## 🎯 Affected Area

<!-- What specifically has performance issues? -->
- [ ] **Component Rendering** - Slow component render times
- [ ] **Bundle Size** - Large JavaScript bundle impact
- [ ] **Memory Usage** - Excessive memory consumption
- [ ] **CSS Performance** - Styling/layout performance
- [ ] **Animation Performance** - Slow or janky animations
- [ ] **Build Performance** - Slow build or compilation times
- [ ] **Runtime Performance** - General runtime slowness
- [ ] **Tree Shaking** - Dead code not being eliminated

## 📊 Performance Metrics

<!-- Provide specific performance data -->

**Before (Current Performance):**
- Load time: 
- Bundle size: 
- Memory usage: 
- FPS/Animation: 
- Other metrics: 

**Expected Performance:**
- Target load time: 
- Target bundle size: 
- Target memory usage: 
- Target FPS: 

## 🧪 How to Reproduce

<!-- Steps to reproduce the performance issue -->
1. Go to '...'
2. Perform action '...'
3. Measure performance using '...'
4. Observe slow performance

## 🔧 Performance Testing Tools

<!-- Which tools did you use to identify this issue? -->
- [ ] **Chrome DevTools** - Performance profiler
- [ ] **React DevTools** - Profiler tab
- [ ] **Lighthouse** - Performance audit
- [ ] **Bundle Analyzer** - Webpack/Rollup analyzer
- [ ] **Web Vitals** - Core Web Vitals metrics
- [ ] **Custom Benchmarks** - Manual timing tests
- [ ] **Memory Profiler** - Memory usage analysis

## 🎯 Specific Component(s)

<!-- Which components are affected? -->
- **Component**: 
- **Props/Usage**: 
- **Data Size**: <!-- e.g., large lists, complex objects -->

## 🌍 Environment

**Package Version:**
- @open-ui-kit/core: 

**Environment:**
- Browser: 
- Device: <!-- Desktop/Mobile/Tablet -->
- CPU: <!-- If relevant -->
- Memory: <!-- If relevant -->
- Network: <!-- If relevant -->

**Framework/Build:**
- React: 
- Build Tool: 
- Bundle Size: 
- Node.js: 

## 📸 Performance Evidence

<!-- Include screenshots, videos, or performance traces -->

**Performance Traces:**
<!-- Attach Chrome DevTools performance traces or other evidence -->

**Bundle Analysis:**
<!-- Share bundle analyzer screenshots if applicable -->

## 💡 Potential Causes

<!-- What do you think might be causing the performance issue? -->
- [ ] Unnecessary re-renders
- [ ] Large bundle inclusion
- [ ] Inefficient algorithms
- [ ] Memory leaks
- [ ] Blocking operations
- [ ] Unoptimized CSS
- [ ] Missing memoization
- [ ] Large dependency imports

## 🔧 Suggested Solutions

<!-- Any ideas for improving performance? -->

## 📊 Impact Assessment

<!-- How significant is this performance issue? -->
- [ ] 🔥 **Critical** - Severely impacts user experience
- [ ] 🟡 **High** - Noticeable performance degradation
- [ ] 🟢 **Medium** - Minor performance impact
- [ ] 🔵 **Low** - Optimization opportunity

## 🎯 Performance Goals

<!-- What would constitute a successful fix? -->
- **Target improvement**: <!-- e.g., 50% faster, 30% smaller bundle -->
- **Acceptable threshold**: <!-- e.g., < 100ms render time -->
- **Key metrics**: <!-- What should be measured for success -->

## 📋 Additional Context

<!-- Any other relevant information -->

## ☑️ Checklist

- [ ] I have measured the performance issue with appropriate tools
- [ ] I have provided specific metrics and evidence
- [ ] I have tested this on the latest version
- [ ] I have considered the impact on different devices/browsers
- [ ] I have searched for existing performance-related issues