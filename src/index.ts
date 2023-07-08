import {getContentElementByNameRenderer} from './core';
import {ContentElementName, ContentElementProps, CustomConfig} from "./core/content-element";
import React from "react";

class CEClass {
    private static instance: CEClass;

    private constructor() {
    }

    static getInstance(): CEClass {
        if (!CEClass.instance) {
            CEClass.instance = new CEClass();
        }
        return CEClass.instance;
    }

    setup(customConfigBySetup: CustomConfig) {
        this.Text = getContentElementByNameRenderer(customConfigBySetup)('text')
        this.Image = getContentElementByNameRenderer(customConfigBySetup)('image')
        this.Block = getContentElementByNameRenderer(customConfigBySetup)('block')
        this.List = getContentElementByNameRenderer(customConfigBySetup)('list')
        this.Link = getContentElementByNameRenderer(customConfigBySetup)('link')
        this.Divider = getContentElementByNameRenderer(customConfigBySetup)('divider')
        this.Button = getContentElementByNameRenderer(customConfigBySetup)('button')
        this.Custom = getContentElementByNameRenderer(customConfigBySetup)('custom')
    }

    Text = getContentElementByNameRenderer()('text');

    Image = getContentElementByNameRenderer()('image');

    Block = getContentElementByNameRenderer()('block');

    List = getContentElementByNameRenderer()('list');

    Link = getContentElementByNameRenderer()('link');

    Divider = getContentElementByNameRenderer()('divider');

    Button = getContentElementByNameRenderer()('button');

    Custom = getContentElementByNameRenderer()('custom');
}

export default CEClass.getInstance();

export * from './core/shared';