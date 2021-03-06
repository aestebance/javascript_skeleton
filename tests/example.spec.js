/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";

import { getByText } from "@testing-library/dom";

import { printUsers } from "../src/index";

test("examples of some things", async () => {
    const container = await printUsers();
    document.body.appendChild(container);

    const user = getByText(container, "Current users");

    expect(user).toBeInTheDocument();
});
