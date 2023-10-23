import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pageData } from "@/types/types";

const initialState: pageData = {
    styles: {},
    elements: {},
};

const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setLayout: (state, action) => {
            state.styles = action.payload.styles;
            state.elements = action.payload.elements;
        },

        updateNavbarActionLabel: (state, action: PayloadAction<string>) => {
            state.elements.navbar = state.elements.navbar || {};
            state.elements.navbar.actions = state.elements.navbar.actions || [];
            state.elements.navbar.actions[0] = { label: action.payload };
        },

        updateNavbarLinkLabel: (state, action: PayloadAction<{ index: number; value: string }>) => {
            state.elements.navbar = state.elements.navbar || { links: [] };
            const { index, value } = action.payload;
            if (state.elements.navbar!.links && state.elements.navbar!.links[index]) {
                state.elements.navbar!.links[index].label = value;
            }
        },

        updateNavbarLinkTo: (state, action: PayloadAction<{ index: number; value: string }>) => {
            state.elements.navbar = state.elements.navbar || { links: [] };
            const { index, value } = action.payload;
            if (state.elements.navbar!.links && state.elements.navbar!.links[index]) {
                state.elements.navbar!.links[index].link = value;
            }
        },

        updateNavbarLinkAdd: (state) => {
            state.elements.navbar = state.elements.navbar || { links: [] };
            state.elements.navbar.links = state.elements.navbar.links || [];
            state.elements.navbar.links.push({ label: "", link: "" });
        },

        updateNavbarLinkRemove: (state, action: PayloadAction<number>) => {
            state.elements.navbar = state.elements.navbar || { links: [] };
            state.elements.navbar.links = state.elements.navbar.links || [];
            if (state.elements.navbar.links[action.payload]) {
                state.elements.navbar.links.splice(action.payload, 1);
            }
        },

        updateNavbarLogo: (state, action: PayloadAction<string>) => {
            state.elements.navbar = state.elements.navbar || {};
            state.elements.navbar.logo = state.elements.navbar.logo || { src: "" };
            state.elements.navbar.logo.src = action.payload;
        },
    },
});

export const {
    setLayout,
    updateNavbarActionLabel,
    updateNavbarLinkLabel,
    updateNavbarLinkTo,
    updateNavbarLinkAdd,
    updateNavbarLinkRemove,
    updateNavbarLogo,
} = layoutSlice.actions;

export default layoutSlice.reducer;
