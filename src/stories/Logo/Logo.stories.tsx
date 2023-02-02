import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Logo as LogoComponent } from "../../components/ui";

export default {
  title: "Example/Components/Logo",
  component: LogoComponent,
} as ComponentMeta<typeof LogoComponent>;

const Template: ComponentStory<typeof LogoComponent> = (args) => (
  <LogoComponent {...args} />
);

export const Logo = Template.bind({});
