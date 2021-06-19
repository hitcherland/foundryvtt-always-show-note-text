Hooks.once('init', function () {
    CONFIG.Note.documentClass = class extends Note {
        refresh() {
            this.position.set(this.data.x, this.data.y);
            this.controlIcon.border.visible = this._hover;
            this.tooltip.visible = true;
            this.visible = this.entry?.testUserPermission(game.user, "LIMITED") ?? true;
            return this;
        }
    }
});