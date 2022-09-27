import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I am adorable",
        type: "primary",
      },
    });
    console.log(wrapper);
  });
});
