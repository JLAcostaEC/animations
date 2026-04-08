# Contributing to Svelte 5 Animations

Thank you for your interest in contributing to Svelte 5 Animations! We welcome contributions from the community.

## How to Contribute

### Reporting Issues

- Check if the issue already exists in the [GitHub Issues](https://github.com/SikandarJODD/animations/issues)
- Provide a clear description of the problem
- Include reproduction steps if applicable

### Creating New Components

We have a detailed guide for creating new components. Please follow these steps:

1. **Read the Component Creation Guide**
   - See [CREATE_COMPONENT_GUIDE.md](./CREATE_COMPONENT_GUIDE.md) for the complete step-by-step process

2. **Fork and Clone**

   ```bash
   git clone https://github.com/YOUR_USERNAME/animations.git
   cd animations
   pnpm install
   ```

3. **Create Your Component**
   - Follow the structure outlined in CREATE_COMPONENT_GUIDE.md
   - Create the component in `src/lib/components/magic/`
   - Add documentation and examples in `src/routes/magic/docs/components/`
   - Update `registry.json` with your component

4. **Test Your Component**

   ```bash
   pnpm registry:build
   pnpm dev
   ```

   - Verify your component works in the dev environment
   - Test the installation process using the CLI

5. **Code Quality**
   - Use TypeScript for type safety
   - Follow the existing code style

6. **Submit a Pull Request**
   - Create a new branch: `git checkout -b feat/your-component-name`
   - Commit your changes with clear messages
   - Push to your fork and submit a PR

## Component Guidelines

### Animation Best Practices

- Use `motion-sv` for animations when possible
- Allow users to override animation timings and easing
- Test on different screen sizes
- Consider performance on lower-end devices

### Documentation Requirements

- Clear description of what the component does
- Complete list of props with types and defaults
- At least one working example
- Installation instructions
- Usage examples with code snippets

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for making Svelte Animations better! 🎉
