import Component from '@ember/component';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';

/*
Example usage:
{{gh-url-preview prefix="tag" slug=theSlugValue tagName="p" classNames="description"}}
*/
export default Component.extend({
    config: service(),

    classNames: 'ghost-url-preview',
    prefix: null,
    slug: null,

    url: computed('slug', function () {
        // Get the blog URL and strip the scheme
        let blogUrl = this.get('config.blogUrl');
        // Remove `http[s]://`
        let noSchemeBlogUrl = blogUrl.substr(blogUrl.indexOf('://') + 3);

        // Get the prefix and slug values
        let prefix = this.prefix ? `${this.prefix}/` : '';
        let slug = this.slug ? `${this.slug}/` : '';

        // Join parts of the URL together with slashes
        let theUrl = `${noSchemeBlogUrl}/${prefix}${slug}`;

        return theUrl;
    })
});
