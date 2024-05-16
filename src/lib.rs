use neon::prelude::*;

use sogouda::launch_app;


fn start(mut cx: FunctionContext) -> JsResult<JsObject> {
    let options: Handle<JsObject> = cx.argument(0)?;

    let title: Handle<JsString> = options.get(&mut cx, "title")?;
    let url: Handle<JsString> = options.get(&mut cx, "url")?;
    let width: Handle<JsNumber> = options.get(&mut cx, "width")?;
    let height: Handle<JsNumber> = options.get(&mut cx, "height")?;
    let frameless: Handle<JsBoolean> = options.get(&mut cx, "frameless")?;
    let debug: Handle<JsBoolean> = options.get(&mut cx, "debug")?;

    launch_app(
        title.value(&mut cx).as_str(),
        url.value(&mut cx).as_str(),
        Option::Some(width.value(&mut cx).round() as i32),
        Option::Some(height.value(&mut cx).round() as i32),
        Option::Some(frameless.value(&mut cx)),
        Option::Some(debug.value(&mut cx))
    );

    let response = cx.empty_object();

    response.set(
        &mut cx,
        "title",
        title
    ).unwrap();

    response.set(
        &mut cx,
        "url",
        url
    ).unwrap();

    response.set(
        &mut cx,
        "width",
        width
    ).unwrap();

    response.set(
        &mut cx,
        "height",
        height
    ).unwrap();

    response.set(
        &mut cx,
        "frameless",
        frameless
    ).unwrap();

    response.set(
        &mut cx,
        "debug",
        debug
    ).unwrap();

    Ok(response)
}


#[neon::main]
fn main(mut cx: ModuleContext) -> NeonResult<()> {
    cx.export_function("start", start)?;
    Ok(())
}
