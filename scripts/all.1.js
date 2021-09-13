var allowAjax = true;

function pageLoad()
{
    readyAjaxLinks();
}

function readyAjaxLinks()
{
    $('a[rel]').one('click', function(event)
    {
        event.preventDefault();
        if (allowAjax)
        {
            allowAjax = false;
            $($(this).attr("rel")).load(this.href + "/body", function()
            {
                pageLoad();
                allowAjax = true
            });
        }
    }).addClass("current")
}

$(document).ready(function()
{
    pageLoad();
});