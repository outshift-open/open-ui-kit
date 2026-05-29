---
name: 🎨 New Component Request
about: Request a new UI component for the library
title: "🎨 [Component] "
labels: ["component", "enhancement", "needs-triage"]
assignees: []
---

## 🎨 Component Name

<!-- What should this component be called? -->
**Component Name:** 

## 📖 Component Description

<!-- Describe what this component does -->

## 🎯 Use Cases

<!-- When and where would this component be used? -->
1. Use case 1: ...
2. Use case 2: ...
3. Use case 3: ...

## 🔧 Proposed API

<!-- How should developers use this component? -->

```tsx
// Example usage
<ComponentName
  prop1="value"
  prop2={true}
  onAction={() => {}}
>
  Content
</ComponentName>
```

## 📋 Required Props

<!-- List the essential props this component needs -->

| Prop Name | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `prop1` | `string` | ✅ | - | Description |
| `prop2` | `boolean` | ❌ | `false` | Description |

## 🎨 Visual Design

<!-- Describe the visual appearance -->
- **Size variants**: <!-- e.g., small, medium, large -->
- **Color variants**: <!-- e.g., primary, secondary, success, error -->
- **States**: <!-- e.g., default, hover, focus, active, disabled -->
- **Themes**: <!-- light/dark mode considerations -->

## ♿ Accessibility Requirements

<!-- What accessibility features are needed? -->
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] ARIA attributes
- [ ] Focus management
- [ ] Color contrast compliance
- [ ] Reduced motion support

## 📱 Responsive Behavior

<!-- How should it behave on different screen sizes? -->
- **Mobile**: 
- **Tablet**: 
- **Desktop**: 

## 🎯 Similar Components

<!-- Reference similar components from other libraries or designs -->
- **Material-UI**: [Link/Example]
- **Ant Design**: [Link/Example]
- **Chakra UI**: [Link/Example]
- **Custom Design**: [Figma/Sketch link]

## 🧪 Testing Considerations

<!-- What should be tested for this component? -->
- [ ] Unit tests for all props
- [ ] Accessibility tests
- [ ] Visual regression tests
- [ ] Interaction tests
- [ ] Responsive tests

## 📚 Documentation Needs

<!-- What documentation is needed? -->
- [ ] Storybook story with all variants
- [ ] Usage examples
- [ ] Do's and Don'ts guide
- [ ] Integration examples
- [ ] Migration guide (if replacing existing component)

## 🔗 Dependencies

<!-- Are there any dependencies or related components? -->
- **Depends on**: <!-- Other components this relies on -->
- **Related to**: <!-- Components that work together with this -->
- **Replaces**: <!-- If this replaces an existing component -->

## 💡 Implementation Notes

<!-- Any technical considerations for implementation -->

## 📊 Priority

<!-- How important is this component? -->
- [ ] 🔥 High - Critical for project success
- [ ] 🟡 Medium - Would significantly improve component library
- [ ] 🟢 Low - Nice to have

## ☑️ Checklist

- [ ] I have searched existing issues to ensure this component hasn't been requested
- [ ] I have provided a clear component description and use cases
- [ ] I have defined the proposed API and props
- [ ] I have considered accessibility requirements
- [ ] I have considered responsive behavior
- [ ] I have researched similar components in other libraries
- [ ] I am willing to contribute to the implementation (if applicable)