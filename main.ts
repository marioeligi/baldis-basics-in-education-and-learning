namespace SpriteKind {
    export const Item = SpriteKind.create()
    export const Teacher = SpriteKind.create()
    export const Principal = SpriteKind.create()
    export const Play = SpriteKind.create()
    export const Bully = SpriteKind.create()
    export const broom = SpriteKind.create()
    export const Sock = SpriteKind.create()
    export const hug = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    Notebooks += 1
    for (let value of tiles.getTilesByType(assets.tile`myTile24`)) {
        tiles.setTileAt(value, assets.tile`myTile6`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    if (Notebooks == 7) {
        game.over(true)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    Notebooks += 1
    for (let value of tiles.getTilesByType(assets.tile`myTile25`)) {
        tiles.setTileAt(value, assets.tile`myTile6`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    Notebooks += 1
    if (Notebooks == 2) {
        Baldimad = 1
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
            tiles.setWallAt(value, false)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        tiles.setTileAt(value, assets.tile`myTile6`)
    }
})
function All_sprites () {
    Apple = sprites.create(img`
        . 2 2 . 
        2 2 2 2 
        2 2 2 2 
        . 2 2 . 
        `, SpriteKind.Item)
    Whistle = sprites.create(img`
        2 2 2 
        2 2 . 
        `, SpriteKind.Item)
    Nametag = sprites.create(img`
        1 1 1 1 
        1 2 2 1 
        1 1 1 1 
        `, SpriteKind.Item)
    Boots = sprites.create(img`
        f f . 
        f f f 
        f . f 
        `, SpriteKind.Item)
    Scissors = sprites.create(img`
        . a a . . 
        a a a . . 
        a a a a a 
        . . a . . 
        . . a . . 
        `, SpriteKind.Item)
    Principal = sprites.create(img`
        . . e e e . . 
        d . d d d . . 
        f . d d d . . 
        . f f f f f . 
        . . f f f . f 
        . . f f f . d 
        . . 6 6 6 . . 
        . . 6 . 6 . . 
        `, SpriteKind.Principal)
    Playtime = sprites.create(img`
        . f f f f f . 
        f . . f f . f 
        f . f f f . f 
        d . d d d . d 
        2 . d d d . 2 
        . 2 2 2 2 2 . 
        . . 2 2 2 . . 
        . . 2 2 2 . . 
        . 8 8 8 8 . . 
        . . . . 8 . . 
        `, SpriteKind.Play)
    Itsabully = sprites.create(img`
        . . . f f . . . 
        . . . d d d . . 
        . . d d d . . . 
        . 8 4 4 4 8 . d 
        8 . 4 4 4 . 8 . 
        . . 4 4 4 . . . 
        . . 8 . 8 . . . 
        . . 8 . . . . . 
        `, SpriteKind.Bully)
    Gottasweep = sprites.create(img`
        . . . 7 . . . 
        . . . 7 . . . 
        . . . 5 . . . 
        . . . 7 . . . 
        . . . 7 . . . 
        . . . 1 . . . 
        . 1 1 1 1 1 . 
        7 7 d d d d d 
        `, SpriteKind.broom)
    _1stprize = sprites.create(img`
        . . d d d . . 
        . . 1 d f . . 
        . . d d d . . 
        d d 9 9 9 d d 
        d d . 2 9 d d 
        . 9 2 9 2 9 . 
        . 9 9 2 . 9 . 
        f 9 9 9 9 9 f 
        f . . . . . f 
        `, SpriteKind.hug)
    Artsandcrafters = sprites.create(img`
        . 1 1 1 . 
        1 1 1 f 1 
        1 f 1 1 1 
        . . 1 1 1 
        . . 1 1 1 
        . . 1 1 1 
        . . 1 1 1 
        . . 1 1 1 
        `, SpriteKind.Sock)
    Baldi = sprites.create(img`
        . . d d d . . 
        . . d d d . . 
        . . d d d . . 
        . 7 7 7 7 7 . 
        7 . 7 7 7 . 7 
        d . 7 7 7 . d 
        . . 8 8 8 . . 
        . . 8 . 8 . . 
        `, SpriteKind.Teacher)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    Notebooks += 1
    if (Notebooks == 2) {
        Baldimad = 1
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
            tiles.setWallAt(value, false)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setTileAt(value, assets.tile`myTile6`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    Notebooks += 1
    for (let value of tiles.getTilesByType(assets.tile`myTile23`)) {
        tiles.setTileAt(value, assets.tile`myTile6`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    Notebooks += 1
    for (let value of tiles.getTilesByType(assets.tile`myTile26`)) {
        tiles.setTileAt(value, assets.tile`myTile6`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    Notebooks += 1
    for (let value of tiles.getTilesByType(assets.tile`myTile28`)) {
        tiles.setTileAt(value, assets.tile`myTile6`)
    }
})
let Artsandcrafters: Sprite = null
let _1stprize: Sprite = null
let Itsabully: Sprite = null
let Playtime: Sprite = null
let Principal: Sprite = null
let Scissors: Sprite = null
let Boots: Sprite = null
let Nametag: Sprite = null
let Whistle: Sprite = null
let Apple: Sprite = null
let Baldimad = 0
let Gottasweep: Sprite = null
let Baldi: Sprite = null
let Notebooks = 0
Notebooks = 0
tiles.setCurrentTilemap(tilemap`level1`)
let Playerguy = sprites.create(img`
    . . e e e . . 
    . . d d d . . 
    . . d d d . . 
    . 7 7 7 7 7 . 
    7 . 7 7 7 . 7 
    7 . 7 7 7 . 7 
    . . 7 7 7 . . 
    . . 7 . 7 . . 
    `, SpriteKind.Player)
controller.moveSprite(Playerguy)
scene.cameraFollowSprite(Playerguy)
tiles.placeOnRandomTile(Playerguy, assets.tile`myTile7`)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    tiles.setWallAt(value, true)
}
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    tiles.setWallAt(value, true)
}
for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
    tiles.setWallAt(value, true)
}
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    tiles.setWallAt(value, true)
}
Baldi = sprites.create(img`
    . . . e . . . 
    . . d d d . . 
    . . d d d . . 
    . . d d d . . 
    . 7 7 7 7 7 . 
    7 . 7 7 7 . 7 
    d . 7 7 7 . d 
    . . 8 8 8 . . 
    . . 8 . 8 . . 
    `, SpriteKind.Teacher)
Gottasweep = sprites.create(img`
    . . . . 1 . . . . 
    . . . . 7 . . . . 
    . . . . 7 . . . . 
    . . . . 5 . . . . 
    . . . . 7 . . . . 
    . . . . 7 . . . . 
    . . . . 7 . . . . 
    . . . 1 1 1 . . . 
    . 1 1 1 1 1 1 1 . 
    7 7 7 d d d d d d 
    `, SpriteKind.broom)
tiles.placeOnRandomTile(Baldi, assets.tile`myTile4`)
tiles.placeOnRandomTile(Gottasweep, assets.tile`myTile20`)
