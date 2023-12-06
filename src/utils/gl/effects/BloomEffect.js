import {
  Framebuffer,
  Texture2D,
  copyToImage,
  copyToTexture,
} from "@luma.gl/webgl";
import GL from "@luma.gl/constants";
import { Effect, PostProcessEffect } from "@deck.gl/core";

import { bloom } from "@/gl/effects/bloom.js";

// @see https://learnopengl.com/Advanced-Lighting/Bloom
export default class BloomEffect extends Effect {
  constructor(props) {
    super(props);
    this.props = props;
    this.renderBuffers = [];
  }

  preRender(gl, opts) {}

  _postRender(gl, params) {
    if (!this.rawTexture) {
      this.rawTexture = new Texture2D(gl, {
        width: params.inputBuffer.width,
        height: params.inputBuffer.height,
        mipmaps: true,
      });
    }
    this.rawTexture.resize({
      width: params.inputBuffer.width,
      height: params.inputBuffer.height,
      mipmaps: true,
    });
  }

  postRender(gl, params) {
    this._postRender(gl, params);
    this.rawTexture = copyToTexture(
      params.inputBuffer.texture,
      this.rawTexture
    );

    this.effect = new PostProcessEffect(bloom, {
      ...this.props,
      rawTexture: this.rawTexture,
    });
    this.effect.postRender(gl, params);
  }

  cleanup() {
    if (this.effect) {
      this.effect.cleanup();
    }
  }
}
