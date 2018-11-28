import React from "react";
import Counter from "../../../../components/counter/counter.js";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Counter/>", () => {
  it("is alive at application start", () => {
    let app = shallow(<Counter />);
    expect(app.find("span").exists()).toBeTruthy();
  });

  it("changes count state on Up event", () => {
    let app = mount(<Counter />);
    let plus = app.find(".up");
    plus.simulate("click");
    expect(app.state("count")).toBe(1);
  });

  it("changes count on Down event", () => {
    let app = mount(<Counter />);
    let minus = app.find(".down");
    minus.simulate("click");
    expect(app.state("count")).toBe(-1);
  });

  it("changes polarity state on Up event", () => {
    let app = mount(<Counter />);
    let plus = app.find(".up");
    plus.simulate("click");
    expect(app.state("polarity")).toBe("positive");
  });

  it("changes polarity on Down event", () => {
    let app = mount(<Counter />);
    let minus = app.find(".down");
    minus.simulate("click");
    expect(app.state("polarity")).toBe("negative");
  });

  it("transfers state to the DOM on Up event", () => {
    let app = mount(<Counter />);
    let plus = app.find(".up");
    plus.simulate("click");
    expect(app.find("span").text()).toBe("1");
  });

  it("transfers state to the DOM on Down event", () => {
    let app = mount(<Counter />);
    let minus = app.find(".down");
    minus.simulate("click");
    expect(app.find("span").text()).toBe("-1");
  });
});
